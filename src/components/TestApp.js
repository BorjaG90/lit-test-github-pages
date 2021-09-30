import { LitElement, html, css } from "lit-element";

export default class TestApp extends LitElement {

render() {
    return html` <div class="monitor">${2 +2}</div>`;
  }
}

customElements.define("test-app", TestApp);