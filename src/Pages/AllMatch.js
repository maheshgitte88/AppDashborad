import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const AllMatch = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    // Fetch all matches from the backend API
    fetch('http://localhost:4000/match/getallmatchs')
      .then((response) => response.json()) 
      .then((data) => setMatches(data))
      .catch((error) => console.error(error));
  }, []);

  const handleMatchClick = (matchId) => {
    // Fetch the selected match and its questions from the backend API
    fetch(`http://localhost:4000/match/${matchId}`)
      .then((response) => response.json())
      .then((data) => setSelectedMatch(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
    <h2>All Matches</h2>
    <ListGroup>
      {matches.map((match) => (
        <ListGroup.Item
          key={match._id}
          action
          onClick={() => handleMatchClick(match._id)}
        >
          <Link to={`/allmatches/${match._id}`}>{match.teams.join(' vs ')}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>

    {selectedMatch && (
      <div>
        <h3>{selectedMatch.teams.join(' vs ')}</h3>
        <h4>Questions:</h4>
        <ul>
          {selectedMatch.questions.map((question) => (
            <li key={question._id}>{question.question}</li>
          ))}
        </ul>
      </div>
    )}
  </>
  );
};

export default AllMatch;
