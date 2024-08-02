import {Router as _, Routes, Route} from 'react-exo/navigation';
import {PageSuspense as $} from 'app/base/PageSuspense';
import {Layout, Screen} from 'app/routes';
import {history} from 'app/store';

export function Router() {
  return (
    <_ {...{history}}>
      <Routes>
        <Route path="/" element={<$><Layout.Main/></$>}>
          {/* General */}
          <Route index element={<$><Screen.Home/></$>}/>
          <Route path="inbox" element={<$><Screen.Teaser/></$>}/>
          <Route path="settings" element={<$><Screen.Settings/></$>}/>
          {/* Media */}
          <Route path="browse/*" element={<$><Screen.Browse/></$>}/>
          {/* World */}
          <Route path="news" element={<$><Screen.Teaser/></$>}/>
          <Route path="maps" element={<$><Screen.Map/></$>}/>
          <Route path="feeds" element={<$><Screen.Teaser/></$>}/>
          <Route path="events" element={<$><Screen.Calendar/></$>}/>
          <Route path="event/:id" element={<$><Screen.Teaser/></$>}/>
          <Route path="alarms" element={<$><Screen.Teaser/></$>}/>
          <Route path="alarm/:id" element={<$><Screen.Teaser/></$>}/>
          {/* Dev */}
          <Route path="design" element={<$><Screen.Design/></$>}/>
          <Route path="library" element={<$><Screen.Library/></$>}/>
        </Route>
      </Routes>
    </_>
  );
}
