import {View} from 'react-native';
import {LegendList} from '@legendapp/list';
import {useStyles, createStyleSheet} from 'react-native-unistyles';
import {EntryHfs} from 'media/dir/stacks/entry-hfs';
import {NoneHfs} from 'media/dir/stacks/none-hfs';
import {ListBar} from 'media/stacks/list/bar';
import {HEIGHT} from 'media/stacks/list/row';
import type {HfsCtx} from 'media/dir/types/hfs';

export function DirHfs({hfs, cmd, ext, bar}: HfsCtx) {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.root}>
      <ListBar
        path={hfs.path}
        actions={[
          {icon: 'ph:plus', onPress: () => {}},
          {icon: 'ph:faders', onPress: () => {}},
          {icon: 'ph:squares-four', onPress: () => {}},
        ]}
        {...bar}
      />
      {!hfs.list?.length ? <NoneHfs offset={!bar.hidden ? -35 : 0}/> : (
        <LegendList
          data={hfs.list}
          extraData={ext}
          recycleItems
          drawDistance={HEIGHT * 20}
          estimatedItemSize={HEIGHT}
          contentContainerStyle={styles.list}
          ListHeaderComponent={!bar.hidden ? <View style={styles.listHeader}/> : null}
          keyExtractor={(_,i) => i.toString()}
          renderItem={({item, index}) => {
            const path = hfs.path ? `${hfs.path}/${item.name}` : item.name;
            const prev = hfs.list[index - 1];
            const next = hfs.list[index + 1];
            const opt = {
              dragging: ext.dnd?.includes(path),
              selected: {
                self: ext.sel?.includes(path),
                prev: ext.sel?.includes(hfs.path ? `${hfs.path}/${prev?.name}` : prev?.name),
                next: ext.sel?.includes(hfs.path ? `${hfs.path}/${next?.name}` : next?.name),
                count: ext.sel?.length,
              },
            };
            return (
              <EntryHfs idx={index} entry={item} {...{cmd, opt}}/>
            );
          }}
        />
      )}
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    flex: 1,
  },
  list: {
    paddingHorizontal: theme.display.space2,
    paddingBottom: theme.display.space2,
  },
  listHeader: {
    height: theme.display.space2,
  },
}));
