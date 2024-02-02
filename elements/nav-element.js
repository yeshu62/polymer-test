import {LitElement, html, css} from 'lit';
import {FaStyles} from '../js/fontawesome';

export class NavElement extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          background-color: green;
          color: white;
          padding: 10px;
        }

        .nav i{
          margin-left:5px;
          
        }

        .header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .logo img {
          width: 140px;
          height: 25px;
          margin-right: 15px;
          margin-left: 10px;
        }

        .fa-icon {
          font-size: 24px;
          margin-right: 10px;
        }

        .nav {
          display: flex;
          align-items: center;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          margin-left: 20px;
        }

        li {
          margin-right: 15px;
        }
        li:hover {
          opacity: 0.7;
          cursor: pointer;
        }

        .create {
          background-color: white;
          color: black;
          padding: 8px 16px;
          border-radius: 5px;
          display: flex;
          align-items: center;
        }
        .right {
          display: flex;
          margin-left: auto; 
        }

        .search-box {
          margin-right: 10px;
        }

        .notification,
        .help,
        .avatar {
          margin-right: 20px;
        }

        .notification,
        .help,
        .avatar i {
          font-size: 20px;
        }

        .notification:hover,
        .help:hover,
        .avatar:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      `,
      FaStyles,
    ];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="nav">
        <i class="fa-solid fa-table-cells-large fa-icon"></i>
        <div class="logo">
          <img src="/img/atl.site.logo" alt="Logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>Recent</li>
          <li>Spaces</li>
          <li>Teams</li>
          <li>Apps</li>
          <li>Templates</li>
        </ul>
        <li class="create"><i class="fa-solid fa-plus fa-icon"></i> Create</li>

        <div class="right">
          <div class="search-box">
            <input type="text" placeholder="Search" />
          </div>
          <div class="notification">
            <i class="fa-regular fa-bell"></i>
          </div>
          <div class="help">
            <i class="fa-regular fa-circle-question"></i>
          </div>
          <div class="avatar">
            <i class="fa-regular fa-user"></i>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('nav-element', NavElement);
