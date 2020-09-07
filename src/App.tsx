import React from 'react';
import './App.css';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './homeComponent/homePage';
import TestDataPage from './testDataComponent/TestDataPage';
import PerformancePage from './performanceComponent/PerformancePage';
import Providers from './store/store.provider';
import PerformanceDetails from './performanceComponent/PerformanceDetails';

const appHistory =  createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Providers>
      <Router history={appHistory}>
      <Switch>
        {/* Definition of routes */}
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/testData' component={TestDataPage} />
        <Route exact path='/performance' component={PerformancePage} />
        <Route exact path={`${'/performance/'}:id`} component={PerformanceDetails} />
        <Route component={HomePage} />
      </Switch>
      </Router>
      </Providers>
    </div>
  );
}

export default App;
