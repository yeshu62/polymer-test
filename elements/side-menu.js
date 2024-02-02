import {LitElement, html, css} from 'lit';
import {FaStyles} from '../js/fontawesome';

export class SideMenu extends LitElement {
  static get styles() {
    return [css`
      :host {
        float:right;
        width:100%;
        margin-top:10px;
      }
      ul {
        list-style: none;
        display: block;
      }
  
      li {
        margin-right: 15px;
        padding: 8px;
      }
      li:hover{
        background-color: #D3D3D3;
        
      }

      i{
        margin-right:12px;
      }

      a{
        text-decoration: none;
        list-style: none;
        color: black;
      }
  
    `, FaStyles];
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();

  }

  render() {
    return html`
    <div class="menu">
      <ul>
        <li><a href='/overview'><i class="fa-solid fa-house"></i>Overview</a></li>
        <li><a href='/recent'><i class="fa-regular fa-clock"></i>Recent</a></li>
        <li><a href='/starred'><i class="fa-regular fa-star"></i>Starred</a></li>
        <li><a href='/drafts'><i class="fa-regular fa-file"></i>Drafts</a></li>
        <li><a href='/tasks'><i class="fa-regular fa-square-check"></i>Tasks</a></li>
      </ul>
    </div>
    `;
  }

}

window.customElements.define('side-menu', SideMenu);
