import React, { useEffect, useState } from 'react';

export default function AllBets() {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bet/allbets')
      .then((response) => response.json())
      .then((data) => setBets(data))
      .catch((error) => console.error(error));
  }, []);

    console.log(bets, 13)
  return (
    <>
    <section className="container">
      <div className="row">
        <div className="col">
          <h4 className="mb-4">All Bets</h4>
        </div>
      </div>
    </section>
  
    <section className="container">
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Match</th>
                  <th>Question</th>
                  <th>Option</th>
                  <th>Betted</th>
                  <th>Reward if Won</th>
                  <th>User</th>
                  <th>Date & Time</th>
                  <th>winner Or Losser</th>
                  <th>correct option</th>
                </tr>
              </thead>
              <tbody>
                {bets.map((bet) => (
                  <tr key={bet._id}>
                    <td data-label="Match">{bet.matchId.teams}</td>
                    <td data-label="Question">{bet.questionId.question}</td>
                    <td data-label="Option">{bet.option}</td>
                    <td data-label="Invest">$ {bet.betAmount}</td>
                    <td data-label="Return">$ {bet.winningAmount}</td>
                    <td data-label="Return">{bet.userId.username}</td>
                    <td data-label="Return">{bet.updatedAt}</td>
                    <td data-label="Return">{bet.isWinningBet ? 'Win ' :'Lose'}</td>
                    <td data-label="Status">{bet.questionId.correctOption}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="pagination justify-content-end"></ul>
        </div>
      </div>
    </section>
  </>
  
  );
}
