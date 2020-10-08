import React from 'react';
import PageCase from '../page/PageCase';
import './App.scss';
import store from '../Store/index'
import { Provider } from 'mobx-react';


function App() {
  return (
    <div>
      <Provider store={store()}>
        <PageCase />
      </Provider>
    </div>
  );
}

export default App;
