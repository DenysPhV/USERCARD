import React from 'react';
import ReactDOM from 'react-dom'; // у него есть рендер
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import 'modern-normalize/modern-normalize.css';
import './index.css';

// import { store } from './redux/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
