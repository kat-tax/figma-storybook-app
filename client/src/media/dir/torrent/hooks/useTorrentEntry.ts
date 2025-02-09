import {useRef, useState, useEffect} from 'react';
import {toPathInfo} from 'app/utils/formatting';
import {bind} from 'media/utils/bind';
import * as dnd from 'app/utils/dragdrop';

import type {View} from 'react-native';
import type {CleanupFn} from 'app/utils/dragdrop';
import type {TorrentFileEntry, TorrentCmd} from '../types';
import type {TorrentEntryProps} from '../stacks/torrent-entry';

const $ = Symbol('torrent');
export type TorrentData = {[$]: true; entry: TorrentFileEntry; cmd: TorrentCmd};
export const isTorrentData = (data: Record<string | symbol, unknown>): data is TorrentData => data[$] === true;
export const getTorrentData = (entry: TorrentFileEntry, cmd: TorrentCmd): TorrentData => ({[$]: true, entry, cmd});

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
        onGenerateDragPreview: dnd.dragPreview(1),
        onDragStart: () => setDragging(true),
        onDrop: () => setDragging(false),
      }),
    ].filter(Boolean) as CleanupFn[]);
  }, [entry, cmd]);

  return {
    ref,
    ext,
    cmd: bind(cmd, entry),
    opt: {...opt, dragging},
  };
}
