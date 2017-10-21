import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'react-datasheet/lib/react-datasheet.css';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
