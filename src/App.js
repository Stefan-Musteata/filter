
import React, {Fragment} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Filter} from './components';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
            <Switch>
              <Route exact path="/" component={Filter} />
            </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
