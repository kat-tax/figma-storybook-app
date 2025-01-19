import {useSelector, useDispatch} from 'react-redux';
import {useState, useCallback, useEffect} from 'react';
import {useAppContext} from 'app/hooks/useAppContext';
import {observe, poll} from '../utils/fs';
import {isInitDirectory} from '../utils/path';
import media from 'media/store';

import type {HfsDirectoryEntry} from 'react-exo/fs';

export function useHfsDir(path: string) {
  const [entries, setEntries] = useState<HfsDirectoryEntry[]>([]);
  const {filesystem} = useAppContext();
  const selection = useSelector(media.selectors.getSelected);

  const dispatch = useDispatch();

  const refresh = useCallback(async () => {
    if (!filesystem) return;
    const showHidden = false;
    const entries: HfsDirectoryEntry[] = [];
    const dirPath = path || '.';
    try {
      for await (const entry of filesystem.list?.(dirPath) ?? []) {
        if (entry.name.endsWith('.crswap'))
          continue;
        if (entry.name.startsWith('.') && !showHidden)
          continue;
        if (dirPath === '.' && isInitDirectory(entry.name))
          continue;
        entries.push(entry);
      }
    } catch (e) {
      console.error('>> fs [list]', e);
    }
    setEntries(entries.sort((a, b) => {
      if (a.name.startsWith('.') && !showHidden)
        return 1;
      if (b.name.startsWith('.') && !showHidden)
        return -1;
      if (a.isDirectory && !b.isDirectory)
        return -1;
      if (!a.isDirectory && b.isDirectory)
        return 1;
      return a.name.localeCompare(b.name);
    }));
  }, [path, filesystem]);

  // Update state with current files
  // (used for range-selection / select all)
  useEffect(() => {
    dispatch(media.actions.list(entries
      .filter(e => !e.isDirectory)
      .map(e => path ? `${path}/${e.name}` : e.name)));
  }, [entries, path, dispatch]);

  // Refresh entries on mount
  useEffect(() => {
    refresh();
    let _disconnect = () => {};
    try {
      observe(path, refresh).then(disconnect => {
        if (!disconnect) {
          let delta = 0;
          console.warn('>> fs [polling]', path);
          const i = setInterval(async () => {
            if (await poll(path, delta)) {
              delta = Date.now();
              refresh();
            }
          }, 200);
          _disconnect = () => clearInterval(i);
        } else {
          _disconnect = disconnect;
        }
      });
    } catch (e) {
      console.error('>> fs [observe]', e);
    }
    return _disconnect;
  }, [path, refresh]);

  return {
    entries,
    selection,
    refresh,
  };
}
