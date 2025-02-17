import {Icon} from 'react-exo/icon';
import {View, Text} from 'react-native';
import {useStyles, createStyleSheet} from 'react-native-unistyles';
import {useLocation, Link} from 'react-exo/navigation';

interface MenuTabProps extends React.PropsWithChildren {
  path: string,
  icon: string,
  label: string,
}

export function MenuTab(props: MenuTabProps) {
  const {pathname} = useLocation();
  const {styles, theme} = useStyles(stylesheet);
  const isActive = props.path === decodeURIComponent(pathname);

  return (
    <Link to={props.path}>
      <View style={styles.item}>
        {props.icon &&
          <Icon
            color={isActive ? theme.colors.foreground : theme.colors.mutedForeground}
            name={props.icon}
            size={20}
          />
        }
        <Text style={[styles.label, isActive && styles.active]}>
          {props.label}
        </Text>
      </View>
    </Link>
  );
}

const stylesheet = createStyleSheet(theme => ({
  item: {
    width: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.display.space1,
    borderRadius: theme.display.radius1,
  },
  label: {
    userSelect: 'none',
    marginHorizontal: theme.display.space1,
    color: theme.colors.mutedForeground,
    lineHeight: 24,
    fontSize: 9,
  },
  active: {
    color: theme.colors.foreground,
  },
}));

