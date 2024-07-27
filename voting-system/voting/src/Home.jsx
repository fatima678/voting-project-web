// // src/Home.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar"; // Adjust the path as needed

// const cards = [
//   { title: "Candidates List", description: "Candidates Details", path: "/candidate-list" },
//   { title: " View Profiles", description: "View Profiles", path: "/profiles" },
//   { title: "Results", description: "Description for Results", path: "/results" },
//   { title: "History", description: "View History", path: "/history" },
//   // { title: "Notifications", description: "Description for Notifications", path: "/notifications" },
//   // { title: "Settings", description: "Description for Settings", path: "/settings" },
//   { title: "Election Candidates Registration", description: "Register Election Candidates", path: "/register-candidate" }, // New card
// ];

// const Home = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="min-h-screen bg-gray-400 p-4 pt-20"> {/* Add top padding to avoid hiding content behind navbar */}
//       <Navbar />
      
//       {/* Card grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200"
//             onClick={() => handleCardClick(card.path)}
//           >
//             <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
//             <p className="text-gray-600">{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Adjust the import path if necessary

function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  const [hasVoted, setHasVoted] = useState(false); // State to track if the user has voted
  const [voteSuccess, setVoteSuccess] = useState(false); // State to track if the vote was successful

  useEffect(() => {
    axios.get('http://localhost:3001/candidates')
      .then(response => {
        setCandidates(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the candidates!", error);
      });
  }, []);

  const handleVote = (index) => {
    // Increase the vote count for the selected candidate
    const newCandidates = [...candidates];
    if (newCandidates[index].vote === undefined || newCandidates[index].vote === null) {
      newCandidates[index].vote = 0; // Initialize vote count if undefined or null
    }
    newCandidates[index].vote += 1;
    setCandidates(newCandidates);
    setHasVoted(true); // Set hasVoted to true to disable further voting
    setVoteSuccess(true); // Set voteSuccess to true to show success message

    // Hide success message after 3 seconds
    setTimeout(() => {
      setVoteSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar /> {/* Adding Navbar component */}
      <div className="min-h-screen bg-gray-100 p-4 pt-24"> {/* Added pt-24 to create space for the Navbar */}
        <h2 className="text-3xl text-slate-800 mb-6 font-bold text-center">Registered Candidates for Election</h2>
        {voteSuccess && (
          <div className="text-center text-green-500 mb-4">
            You have successfully cast your vote!
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 min-h-[250px] flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl" // Added transition-shadow and hover:shadow-2xl
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900 text-center">{candidate.fullname}</h3>
                <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Department:</strong> {candidate.department}</p>
                <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Semester:</strong> {candidate.semester}</p>
                <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Society:</strong> {candidate.society}</p>
                <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Position:</strong> {candidate.position}</p>
                <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Symbol:</strong> {candidate.symbol}</p>
                <p className="text-gray-800"><strong>Vote:</strong> {candidate.vote !== undefined && candidate.vote !== null ? candidate.vote : ''}</p> {/* Display vote count or empty */}
              </div>
              <div>
                <button
                  className="mt-4 bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-600"
                  onClick={() => handleVote(index)}
                  disabled={hasVoted} // Disable all buttons if the user has voted
                >
                  Cast Vote
                </button>
                <button
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
                  onClick={() => alert(`Current votes for ${candidate.fullname}: ${candidate.vote}`)} // Placeholder action for View Result
                >
                  View Result
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CandidateList;

