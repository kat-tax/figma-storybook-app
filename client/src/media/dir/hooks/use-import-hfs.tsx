import {FS} from 'react-exo/fs';
import {useLocation} from 'react-exo/navigation';
import {useCallback, useMemo} from 'react';
import {getStartInDir} from 'media/dir/utils/hfs/path';
import {toPath} from 'app/utils/formatting';

export function useImportHfs() {
  const {pathname} = useLocation();
  const {parts, startIn} = useMemo(() => {
    const path = toPath(pathname, true);
    const startIn = getStartInDir(path.parts[0]);
    return {startIn, parts: path.parts};
  }, [pathname]);

  /** Create a new folder */
  const createFolder = useCallback(async (name: string) => {
    const fs = await FS.init('fs');
    const path = parts.join('/');
    await fs?.createDirectory?.(`${path}/${name}`);
  }, [parts]);

  /** Import a folder from the device */
  const importFolder = useCallback(async () => {
    const timer = performance.now();
    const from = await FS.openDirectory({id: parts[0], startIn});
    const to = await FS.importDirectory(from, parts.join('/'));
    console.log('>> fs [import dir]', from, to, performance.now() - timer);
  }, [parts, startIn]);

  /** Import a file from the device */
  const importFile = useCallback(async () => {
    const timer = performance.now();
    const from = await FS.openFile({id: parts[0], startIn, multiple: true});
    const to = await FS.importFile(from);
    console.log('>> fs [import file]', from, to, performance.now() - timer);
  }, [parts, startIn]);

  return {createFolder, importFolder, importFile};
}
