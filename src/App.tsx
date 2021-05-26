import React from 'react';
import HomePage from './pages/page-home';
import {HashRouter, Switch, Route} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <HashRouter>
        <Switch>
          <Route path="/"  component={HomePage}/>
        </Switch>
    </HashRouter>

  );
};

export default App;
