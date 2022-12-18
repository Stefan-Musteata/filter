
import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Filter, DetailsPerson } from './components';
import './components/style/style.scss'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Filter} />
            <Route exact path="/page/:slug" component={DetailsPerson} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
