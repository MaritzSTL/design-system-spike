import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

import { Button } from "@material/mwc-button";

/**
 * @customElement
 * @polymer
 */
class DesignSystemSpikeApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <mwc-textfield></mwc-textfield>
      card {
        icon
        text
        input
        input
        button
      }

      <mwc-button>hey</mwc-button>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "design-system-spike-app"
      }
    };
  }
}

window.customElements.define("design-system-spike-app", DesignSystemSpikeApp);
