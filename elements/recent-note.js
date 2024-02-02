import {LitElement, html, css} from 'lit';
export class RecentNote extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid black;
        max-height: 200px;
      }
    `;
  }

  static get properties() {
    return {
        heading : {type: String},
        area : {type: String},
        lastVisited: {type: String}

    };
  }

  constructor() {
    super();
    this.heading = '';
    this.area = '';
    this.lastVisited = '';
  }

  render() {
    return html`
      <div>
        <div>
          <i class="fa-regular fa-note-sticky"></i>
          <h3>${this.heading}</h3>
        </div>
        <p>${this.area}</p>
        <div>
          <p>
            <i class="fa-regular fa-clock"></i>You visited ${this.lastVisited}
          </p>
        </div>
      </div>
    `;
  }
}

window.customElements.define('recent-note', RecentNote);
