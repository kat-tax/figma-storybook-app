import {useRef, useState, useEffect} from 'react';
import {toPathInfo} from 'app/utils/formatting';
import * as dnd from 'app/utils/dragdrop';

import type {View} from 'react-native';
import type {CleanupFn} from 'app/utils/dragdrop';
import type {TorrentFileEntry, TorrentCmd} from '../types';
import type {TorrentEntryProps} from '../stacks/TorrentEntry';

export function useTorrentEntry(props: TorrentEntryProps) {
  const {entry, cmd, opt} = props;
  const [dragging, setDragging] = useState(false);
  const ext = toPathInfo(entry.name, false)?.ext;
  const ref = useRef<View>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current as unknown as HTMLElement;
    return dnd.combine(...[
      dnd.draggable({
        element,
        getInitialData: () => getTorrentData(entry, cmd),
        onGenerateDragPreview: ({nativeSetDragImage}) => dnd.dragPreview(nativeSetDragImage),
        onDragStart: () => setDragging(true),
        onDrop: () => setDragging(false),
      }),
    ].filter(Boolean) as CleanupFn[]);
  }, [entry, cmd]);

  return {
    ref,
    ext,
    cmd: Object.fromEntries(Object.entries(cmd).map(
      ([key, fn]) => [key, fn.bind(null, entry)],
    )) as {
      [K in keyof typeof cmd]: Parameters<typeof cmd[K]> extends [TorrentFileEntry, ...infer Rest]
        ? (...args: Rest) => ReturnType<typeof cmd[K]>
        : typeof cmd[K]
    },
    opt: {
      ...opt,
      dragging,
    },
  };
}

const $ = Symbol('torrent');
export type TorrentData = {[$]: true; entry: TorrentFileEntry; cmd: TorrentCmd};
export const isTorrentData = (data: Record<string | symbol, unknown>): data is TorrentData => data[$] === true;
export const getTorrentData = (entry: TorrentFileEntry, cmd: TorrentCmd): TorrentData => ({[$]: true, entry, cmd});
