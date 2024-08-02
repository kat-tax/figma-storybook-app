import {Game} from 'react-exo/game';
import {useStyles, createStyleSheet} from 'react-native-unistyles';
import {useFileDataURL} from 'media/files/hooks/useFileDataURL';
import type {GameProps} from 'react-exo/game';

interface FileGame {
  path: string,
  name: string,
  platform: GameProps['platform'],
}

export function FileGame(props: FileGame) {
  const {styles, theme} = useStyles(stylesheet);
  const urlRom = useFileDataURL(props.path);

  return urlRom ? (
    <Game
      url={urlRom}
      name={props.name}
      platform={props.platform}
      accent={theme.colors.accent}
      background={theme.colors.background}
      bios={`/.BIOS/${props.platform}.bin`}
      style={styles.root}
      startOnLoaded
    />
  ) : null;
}

const stylesheet = createStyleSheet(() => ({
  root: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
