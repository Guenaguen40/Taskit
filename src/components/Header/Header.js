import React from 'react'
import css from './style.css';


function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
              task.it
            </a>
          </div>
          <div className="nav-right">
        <button className="button primary">New</button>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Header;
  