/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import useTabGroup from './useTab';
import './common.css';
 import './nav-bar.css';
import './tabcontrol.css';
import './navbar.css';

const Application: React.FC = () => {
  const navGoBack = () => {
    // Implement your logic for navigating back here
  };

  const navGoForward = () => {
    // Implement your logic for navigating forward here
  };

  const navReload = () => {
    // Implement your logic for reloading here
  };

  const increaseZoom = () => {
    // Implement your logic for increasing zoom here
  };

  const decreaseZoom = () => {
    // Implement your logic for decreasing zoom here
  };

  const resetZoom = () => {
    // Implement your logic for resetting zoom here
  };

  const openZoomMenu = () => {
    // Implement your logic for opening the zoom menu here
  };
  
  const tabGroupStyles = {
    tabcontent: {
      /* display: none; */
    },
    etabs: {
      display: 'flex',
    },
    'nav.visible': {
      display: 'flex',
      width: '60px',
      height: '97vh',
      backgroundColor: '#ffffff',
      border: 'none',
      flexDirection: 'column',
      borderRight: '1px solid #bbbbbb29',
      boxShadow: '10px 0 8px -8px #00000054',
    },
    views: {
      position: 'relative',
      height: 'calc(100vh - 35px)',
      width: '100vw',
    },
    'tab.active': {
      background: '#00000017',
      border: 'none',
      borderLeft: '1px solid #00c4ff',
      boxShadow: 'none',
      paddingLeft: '7px',
    },
    'tab-icon': {
      height: '20px',
      width: '20px',
    },
    'tab-icon img': {
      maxWidth: '20px',
      maxHeight: '20px',
    },
    'tab-title, .tab-close': {
      display: 'none',
    },
    buttons: {
      borderLeft: 'none',
      padding: '0px',
      display: 'none',
    },
    'tab.visible:not(.active) + .tab.visible:not(.active)': {
      borderLeft: 'none',
      paddingLeft: '8px',
    },
  };
  // useTabGroup();

  return (
    <div className="app-container">
      <div className="app-nav-bar-container">
        <div className="nav-bar-all-elems">
          <div className="nav-bar-branding-navigation-control-container">
            <div className="nav-bar-branding-container">
              <div className="nav-bar-logo-container">
                <img src="./assets/images/logo.png" height="100%" alt="" />
              </div>
              <div className="nav-bar-label-container">Meetonbubble</div>
            </div>
            <div className="nav-bar-navigation-control-container">
              <div className="nav-bar-back-forward-container navicon" onClick={navGoBack}>
                <img src="./assets/images/go-back.svg" height="100%" alt="" />
              </div>
              <div className="nav-bar-forward-container navicon" onClick={navGoForward}>
                <img src="./assets/images/go-forward.svg" height="100%" alt="" />
              </div>
              <div className="nav-bar-reload-container navicon" onClick={navReload}>
                <img src="./assets/images/reload.svg" height="100%" alt="" />
              </div>
            </div>
          </div>
          <div className="tabs-elem-controlbar-container" id="tabsControlbarContainer">
            <div className="tab-group-elems-container" id="tabGroupContainer">
              {/* Add tab content here */}
            </div>
          </div>
          <div className="nav-bar-app-title-container">
            <div className="nav-bar-title-label">Gmail</div>
          </div>
          <div className="nav-bar-zoom-container">
            <div className="nav-bar-zoom-percent-text-plus-minus-reset-container">
              <div className="nav-bar-zoom-percent-text-container"></div>
              <div className="nav-bar-zoom-percent-plus-container navicon" onClick={increaseZoom}>
                <img src="./assets/images/zoom-plus.svg" height="100%" alt="" />
              </div>
              <div className="nav-bar-zoom-percent-minus-container navicon" onClick={decreaseZoom}>
                <img src="./assets/images/zoom-minus.svg" height="100%" width="14px" alt="" />
              </div>
              <div className="nav-bar-zoom-percent-reset-container" onClick={resetZoom}>
                Reset
              </div>
            </div>
            <div className="nav-bar-zoom-icon-container navicon" onClick={openZoomMenu}>
              <img src="./assets/images/zoomin.svg" height="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <TabGroup> */}
        <style>
          
          {Object.entries(tabGroupStyles).map(([selector, styles]) => (
            `${selector} { ${Object.entries(styles)
              .map(([property, value]) => `${property}: ${value};`)
              .join(' ')} }`
          ))}
        </style>
      {/* </TabGroup> */}
    </div>
  );
};

export default Application;

