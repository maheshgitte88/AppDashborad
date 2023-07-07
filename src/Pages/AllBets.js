import React, { useEffect, useState } from 'react';

export default function AllBets() {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bet/allbets')
      .then((response) => response.json())
      .then((data) => setBets(data))
      .catch((error) => console.error(error));
  }, []);

    
  return (
    <>
      <section className="">
        <div className="">
          <div className="">
            <h4 className="">All Bets</h4>
          </div>
        </div>
      </section>

      <section className="">
        <div className="">
          <div className="">
            <div className="">
              <table className="">
                <thead>
                  <tr>
                    <th>Match</th>
                    <th>Question</th>
                    <th>Option</th>
                    <th>Betted</th>
                    <th>Reward if Won</th>
                    <th>Status</th>
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
                    <td data-label="Status"><span className="badge badge--warning">Pending</span>{" "}</td>
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
