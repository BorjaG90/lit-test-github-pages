import { LitElement, html, css } from "lit-element";

export default class TestApp extends LitElement {

render() {
    return html` <h1>Test</h1><div class="monitor">${2 +2}</div>`;
  }
}

customElements.define("test-app", TestApp);