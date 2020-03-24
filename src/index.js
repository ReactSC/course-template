import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// import Bootstrap and other css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import Rot Provider
import Provider from './store/Provider';

const app = (
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render( app, document.getElementById('root') );

serviceWorker.register();
