import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './output.scss'; 
import { BrowserRouter as Router} from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
        <App/>
    </Router>
  </React.StrictMode>
);
