import {useLingui} from '@lingui/react/macro';
import {MenuContext} from 'app/stacks/float';

import type {useEntryHfs} from 'media/dir/hooks/use-entry-hfs';
import type {HfsFileEntry} from 'media/dir/types/hfs';

export interface MenuHfsProps extends React.PropsWithChildren {
  item: HfsFileEntry,
  cmd: ReturnType<typeof useEntryHfs>['cmd'],
  on?: (open: boolean) => void,
}

export function MenuHfs(props: MenuHfsProps) {
  const {item, cmd, on} = props;
  const dir = item.isDirectory;
  const {t} = useLingui();

  return (
    <MenuContext label={item.name} onOpenChange={on} items={[
      dir && {
        name: 'open',
        icon: 'ph:folder-open',
        label: t`Open`,
        shortcut: '⇧+Click',
        action: cmd.open,
      },
      !dir && {
        name: 'share',
        icon: 'ph:share',
        label: t`Share`,
        shortcut: '⌘+K',
        action: cmd.share,
      },
      dir && {
        name: 'compress',
        icon: 'ph:box-arrow-down',
        label: t`Compress`,
        shortcut: '⌘+L',
        action: cmd.compress,
      },
      !dir && {
        name: 'download',
        icon: 'ph:download',
        label: t`Download`,
        shortcut: '⌘+D',
        action: cmd.download,
      },
      {
        name: 'middle',
        label: '-',
      },
      {
        name: 'copy',
        icon: 'ph:copy',
        label: t`Copy`,
        shortcut: '⌘+C',
        action: cmd.copy,
      },
      {
        name: 'move',
        icon: 'ph:arrow-elbow-down-right',
        label: t`Move`,
        shortcut: '⌘+X',
        action: cmd.move,
      },
      {
        name: 'rename',
        icon: 'ph:textbox',
        label: t`Rename`,
        shortcut: 'F2',
        action: cmd.rename,
      },
      {
        name: 'bottom',
        label: '-',
      },
      {
        name: 'delete',
        icon: 'ph:trash',
        label: t`Delete`,
        shortcut: '⌘+Del',
        destructive: true,
        action: cmd.purge,
      },
    ]}>
      {props.children}
    </MenuContext>
  );
}
