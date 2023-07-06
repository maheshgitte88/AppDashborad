// src/components/Home.js
import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [teams, setTeams] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "teams") {
      setTeams(event.target.value);
    } else if (event.target.name === "scheduledTime") {
      setScheduledTime(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const matchData = {
      teams: teams.split(","),
      scheduledTime: scheduledTime
    };

    axios.post("http://localhost:4000/match/addmatch", matchData)
      .then(response => {
        setMessage(response.data.message);
        setTeams("");
        setScheduledTime("");
        console.log("hpi hits")

      })
      .catch(error => {
        console.error(error);
        setMessage("Failed to add the match. Please try again.");
      });
  };
  return (
  <>
      <div>
      <h2>Add Match</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="teams">Teams:</label>
          <input
            type="text"
            name="teams"
            value={teams}
            onChange={handleInputChange}
            required
          />
          <small>Separate team names with commas</small>
        </div>
        <div>
          <label htmlFor="scheduledTime">Scheduled Time:</label>
          <input
            type="datetime-local"
            name="scheduledTime"
            value={scheduledTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Match</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  </>
  );
};

export default Home;
