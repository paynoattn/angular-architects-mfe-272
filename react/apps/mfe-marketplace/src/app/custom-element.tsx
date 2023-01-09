import React from 'react'
import ReactDOM from 'react-dom'

import App from './app';

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-element', Mfe4Element);
