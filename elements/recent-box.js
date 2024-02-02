import {LitElement, html, css} from 'lit';
import { FaStyles } from '../js/fontawesome';
export class RecentBox extends LitElement {
  static get styles() {
    return [css`
      :host {
       
      }

      .recent-content{
        border: 1px solid #D3D3D3;
        border-radius: 10px;
        padding: 10px;

      }
      h4{
        margin-bottom: 0px;
       
      }

      h4 i{
        color: #087DCE;
       
      }

      span, p{
        font-size: 12px;
      }
      span{
        margin-left: 16px;
      }


    `, FaStyles];
  }

  static get properties() {
    return {
      heading: {type:String},
      space: {type:String},
      lastVisited: {type:String}
    };
  }

  constructor() {
    super();
    this.heading = ''
    this.space=''
    this.lastVisited=''
  }

  render() {

    return html`
    <div class="recent-content"> 
      <h4> <i class="fa-solid fa-file-invoice"></i> ${this.heading}</h4>
      <span>${this.space}</span>
      <p>${this.lastVisited}</P>
    </div>
    
    `;
  }

}

window.customElements.define('recent-box', RecentBox);
