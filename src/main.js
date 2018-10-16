import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app/app';
import '../style/style.scss';

const rootNote = document.createElement('div');
document.body.appendChild(rootNote);
ReactDom.render(<App />, rootNote);
