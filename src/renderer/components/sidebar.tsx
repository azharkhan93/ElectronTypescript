import React, { useState } from 'react';
import { icons } from './Icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isGmailOpen, setIsGmailOpen] = useState(false);

  const toggleGmailPage = () => {
    setIsGmailOpen(!isGmailOpen);
  };

  return (
    <>
      <div className="sidebar">
        <img
          src={icons.react}
          alt="Gmail Logo"
          className="gmail-logo"
          onClick={toggleGmailPage}
        />
      </div>
      <div className="content">
        {isGmailOpen ? (
          <webview id="webview" src="https://mail.google.com"></webview>
        ) : null}
      </div>
    </>
  );
};

export default Sidebar;


// import React, { useState } from 'react';
// import './Sidebar.css'; // Import your CSS styles here
// import { icons } from './Icons';

// const Sidebar: React.FC = () => {
//   const [showGmailPage, setShowGmailPage] = useState(false);

//   const toggleGmailPage = () => {
//     setShowGmailPage(!showGmailPage);
//   };

//   return (
//     <div className="sidebar">
//       <img
//         src={icons.react}
//         alt="Gmail Logo"
//         className="gmail-logo"
//         onClick={toggleGmailPage}
//       />
//       {/* You can add more sidebar items/icons here */}
//       {showGmailPage && (
//         <div className="webview-container">
//           <webview
//             src="https://mail.google.com"
//             id="gmail-webview"
//             title="Gmail Login"
            
//           >
            
//           </webview>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

