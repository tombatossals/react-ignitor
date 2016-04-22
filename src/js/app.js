import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import LayoutPage from 'components/layout';
import FrontPage from 'components/front';
import YoutubePage from 'components/youtube';

function App() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={LayoutPage}>
        <IndexRoute component={FrontPage} />
        <Route path="/youtube" component={YoutubePage} />
      </Route>
    </Router>
  );
}

export default App;
