import {useEffect} from 'react';
import {ToastRoot} from 'react-exo/toast';
import {StatusBar, Appearance} from 'react-native';
import {useInitialTheme, UnistylesRuntime} from 'react-native-unistyles';
//import Bootsplash from 'react-native-bootsplash';
import {useDevice} from 'app/hooks/useDevice';
import {useOnline} from 'app/hooks/useOnline';
import {useScheme} from 'settings/hooks/useScheme';

export function Layout(props: React.PropsWithChildren) {
  const online = useOnline();
  const [scheme] = useScheme();

  useDevice();
  useInitialTheme(scheme || 'light');
  
  useEffect(() => {
    if (scheme) {
      UnistylesRuntime.setTheme(scheme);
      if (Appearance?.setColorScheme) {
        Appearance.setColorScheme(scheme);
      }
    }
  }, [scheme]);

  useEffect(() => {
    //Bootsplash.hide();
  }, []);

  return <>
    <StatusBar
      barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
      networkActivityIndicatorVisible={online === false}
    />
    {props.children}
    <ToastRoot/>
  </>
}
