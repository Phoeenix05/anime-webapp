import "solid-js";
import { render } from 'solid-js/web';
import { Router, hashIntegration } from "@solidjs/router";
import './styles'
import App from './App';

render(() => (
  <Router source={hashIntegration()}>
    <App />
  </Router>
), document.getElementById('root') as Node);
