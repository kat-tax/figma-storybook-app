import {useStyles, createStyleSheet} from 'react-native-unistyles';
import {View, Text} from 'react-native';
import {ListRowIcon} from 'media/stacks/ListRowIcon';
import {bytesize} from 'app/utils/formatting';
import {isTouch} from 'app/utils/platform';

export const TOUCH = isTouch();
export const HEIGHT = TOUCH ? 40 : 26;

interface ListRow {
  name: string,
  size?: number,
  ext?: string,
  dir?: boolean,
  opt?: {
    selected?: boolean,
    focused?: boolean,
    blurred?: boolean,
  }
}

export function ListRow(props: ListRow) {
  const {styles} = useStyles(stylesheet);
  const {name, size, ext, dir, opt} = props;
  const {selected, focused, blurred} = opt ?? {};
  const vstyles = {
    root: [
      styles.root,
      selected && styles.selected,
      focused && styles.focused,
      blurred && styles.blurred,
    ],
  };

  return (
    <View style={vstyles.root}>
      <ListRowIcon {...{size: TOUCH ? 1 : 0, name, ext, dir}}/>
      <Text
        style={styles.text}
        selectable={false}
        ellipsizeMode="middle"
        numberOfLines={1}>
        {name}
      </Text>
      {Boolean(size) &&
        <Text
          style={[styles.text, styles.size]}
          selectable={false}
          numberOfLines={1}>
          {bytesize(size ?? 0)}
        </Text>
      }
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.display.space2,
    paddingVertical: theme.display.space1,
    borderRadius: theme.display.radius1,
    borderWidth: 1,
    height: HEIGHT,
    borderColor: 'rgba(0,0,0,0)',
    gap: theme.display.space2,
  },
  focused: {
    borderColor: theme.colors.foreground,
  },
  blurred: {
    opacity: 0.5,
  },
  text: {
    fontFamily: theme.font.family,
    fontSize: theme.font.size,
    fontWeight: theme.font.weight,
    lineHeight: theme.font.height,
    letterSpacing: theme.font.spacing,
    color: theme.colors.foreground,
    ...TOUCH && {
      fontSize: theme.font.contentSize,
      lineHeight: theme.font.contentHeight,
      letterSpacing: theme.font.contentSpacing,
    },
  },
  size: {
    color: theme.colors.mutedForeground,
    fontSize: 11,
    flexShrink: 0,
  },
  selected: {
    backgroundColor: theme.colors.muted,
  },
}));
