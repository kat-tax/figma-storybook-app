import {StoreProvider} from 'common/store/Provider';
import {AppProvider} from 'AppProvider';
import {AppRouter} from 'AppRouter';

export function App() {
  return (
    <StoreProvider>
      <AppProvider>
        <AppRouter/>
      </AppProvider>
    </StoreProvider>
  )
}
