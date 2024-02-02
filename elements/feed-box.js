import {LitElement, html, css} from 'lit';
export class FeedBox extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #D3D3D3;
        max-height: 200px;
      }
    `;
  }

  static get properties() {
    return {
      author: {type:String},
      action: {type:String},
      editNumber: {type:Number},
      time: {type: Number},
      title: {type:String},
      details: {type:String}
    };
  }

  constructor() {
    super();
    this.author = ''
    this.action=''
    this.editNumber=''
    this.time=0
    this.title=''
    this.details=''
  }

  render() {

    return html`
    <h6>${this.author} ${this.action} ${this.editNumber} times ${this.time} hours ago</h6>
    <h4>${this.title}</h4>
    <p>${this.details}</p>
    `
  }

}

window.customElements.define('feed-box', FeedBox);
