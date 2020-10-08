import React from 'react';
import PageCase from '../Page/PageCase';
import './App.scss';
import store from '../Store/index'
import { Provider } from 'mobx-react';
import { 
  BrowserRouter, 
  Switch,
  Route, Redirect 
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Provider store={store()}>
          <Switch>
            <Route path ='/:id' component={PageCase} />
            <Redirect to='/home'/>
          </Switch>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
