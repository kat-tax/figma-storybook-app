import {View,ScrollView} from 'react-native';
import {useStyles, createStyleSheet} from 'react-native-unistyles';
import {StreamList} from 'live/stacks/StreamList';
import {Active} from 'live/stacks/Active';

export default function ScreenRooms() {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.base}>
      <ScrollView style={styles.root} contentContainerStyle={{flex: 1}}>
        <StreamList/>
      </ScrollView>
      <View style={styles.active}>
        <Active/>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  base: {
    flex: 1,
    flexDirection: 'row',
  },
  root: {
    flex: 1,
    margin: theme.display.space2,
    padding: theme.display.space2,
    borderWidth: rt.hairlineWidth,
    borderRadius: theme.display.radius2,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
  },
  active: {
    flex: 1,
  },
}));
