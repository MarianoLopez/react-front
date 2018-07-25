import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/'
import store from './store'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap3/dist/css/bootstrap-theme.min.css'
import 'bootstrap3/dist/css/bootstrap.min.css'

ReactDOM.render(<Provider store={store}><Router/></Provider>, document.getElementById('root'));
registerServiceWorker();
