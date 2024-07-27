// // src/App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Registration from "./Registration";
// import Login from './Login';

// import Home from './Home';
// import CandidateList from './CandidateList';
// import CandidateRegistration from './CandidateRegistration';
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import History from './History'
// import Profile from './profiles/Profile';
// import Imran from './profiles/Imran'; // Ensure this file exists and has a default export
// // import Tayyab from './profiles/Tayyab'; // Ensure this file exists and has a default export
// import Butto from './profiles/Butto';   
// import Nawz from './profiles/Nawz';     
// import Maryam from './profiles/Maryam'; 
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/register" />} />
//         <Route path="/register" element={<Registration />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/candidate-list" element={<CandidateList />} />
//         <Route path="/register-candidate" element={<CandidateRegistration />} />
//         <Route path="/aboutUs" element={<AboutUs />} />
//         <Route path="/contactUs" element={<ContactUs />} />
//         <Route path="/history" element={<History />} />

//         <Route path="/profiles" element={<Profile />} />
//         <Route path="/imran" element={<Imran />} />
//         {/* <Route path="/tayyab" element={<Tayyab />} /> */}
//         <Route path="/butto" element={<Butto />} />
//         <Route path="/nawz" element={<Nawz />} />
//         <Route path="/maryam" element={<Maryam />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// // // src/App.jsx
// // import React from "react";
// // import Registration from "./Registration";
// // import Login from './Login';
// // import Home from './Home';
// // import CandidateRegistration from './CandidateRegistration';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import AboutUs from "./AboutUs";
// // import ContactUs from "./ContactUs";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Navigate to="/register" />} />
// //         <Route path="/register" element={<Registration />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/register-candidate" element={<CandidateRegistration />} /> {/* New route */}
// //         <Route path="/aboutUs" element={<AboutUs />} />
// //         <Route path="/contactUs" element={<ContactUs />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;





// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from "./Registration";
import Login from './Login';
import Navbar from './Navbar'; // Ensure the Navbar component is correctly imported
import Home from './Home';
import CandidateList from './CandidateList';
import CandidateRegistration from './CandidateRegistration';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import History from './History';
import Profile from './profiles/Profile';
import Imran from './profiles/Imran'; // Ensure this file exists and has a default export
import Tayyab from './profiles/Tayyab'; // Ensure this file exists and has a default export
import Butto from './profiles/Butto';
import Nawz from './profiles/Nawz';
import Maryam from './profiles/Maryam';
// import AdminLogin from './AdminLogin';
import Results from './Results';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<WithNavbar><Home /></WithNavbar>} />
        <Route path="/candidate-list" element={<WithNavbar><CandidateList /></WithNavbar>} />
        <Route path="/register-candidate" element={<WithNavbar><CandidateRegistration /></WithNavbar>} />
        <Route path="/aboutUs" element={<WithNavbar><AboutUs /></WithNavbar>} />
        <Route path="/contactUs" element={<WithNavbar><ContactUs /></WithNavbar>} />
        <Route path="/history" element={<WithNavbar><History /></WithNavbar>} />
        <Route path="/profiles" element={<WithNavbar><Profile /></WithNavbar>} />
        <Route path="/imran" element={<WithNavbar><Imran /></WithNavbar>} />
        <Route path="/tayyab" element={<WithNavbar><Tayyab /></WithNavbar>} />
        <Route path="/butto" element={<WithNavbar><Butto /></WithNavbar>} />
        <Route path="/nawz" element={<WithNavbar><Nawz /></WithNavbar>} />
        <Route path="/maryam" element={<WithNavbar><Maryam /></WithNavbar>} />
        <Route path="/results" element={<WithNavbar><Results /></WithNavbar>} />
        {/* <Route path="/adminlogin" element={<AdminLogin />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

function WithNavbar({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '50px' }}>{children}</div> 
    </>
  );
}

export default App;

