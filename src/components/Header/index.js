// Write your code here
import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => (
  <nav className="header">
    <Link to="/" className="link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="menu-icon-button"
            aria-label="Menu"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menu-icon" />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              onClick={() => close()}
              aria-label="Close"
              className="close-button"
              data-testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
            <div className="modal-container">
              <ul className="modal-list">
                <li className="model-content">
                  <AiFillHome className="home-icon" />
                  <Link to="/" onClick={() => close()} className="link">
                    <p className="home-name">Home</p>
                  </Link>
                </li>
                <li className="model-content">
                  <BsInfoCircleFill className="about-icon" />
                  <Link to="/about" onClick={() => close()} className="link">
                    <p className="about-name">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
