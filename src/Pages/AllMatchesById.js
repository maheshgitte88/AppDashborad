import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Table, Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AllMatchesById() {
  const [match, setMatch] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/match/${id}`);
        setMatch([response.data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMatch();
    updateCorrectOption()
  }, [id]);

  // Update correct option
  const updateCorrectOption = async (questionId, option) => {
    console.log(option, questionId, 25)
    try {
      const response = await axios.put(`http://localhost:4000/question/${questionId}`, {
        correctOption: option,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Update correct option status
  const updateCorrectOptionStatus = async (MatchId) => {
    try {
      const response = await axios.post(`http://localhost:4000/bet/decide-winning-bets/${MatchId}`, {
        status: 'Correct',
      });
      // Handle success or display a success message
    } catch (error) {
      console.error(error);
      // Handle error or display an error message
    }
  };
  console.log(match, 48)
  return (
    <>
      {match.map((match) => (
        <article key={match._id}>
          <div className="d-flex">
            <h5 >
              {match.teams.join(' vs ')}
              <br />
              {match.scheduledTime}
            </h5>
            <Button
              variant="primary"
              onClick={() => updateCorrectOptionStatus(match._id)}
            >
              Set Correct
            </Button>
          </div>

          {match.questions.length > 0 && (
            <div style={{ padding: '20px' }}>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Time & Date</th>
                    <th>Choise Option</th>
                    <th>Active Or Not</th>
                    <th>Winning ratio</th>
                    <th>Options</th>
                    <th>Status Or correctOption</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {match.questions.map((question) => (
                    <tr key={question._id}>
                      <td>{question.question}</td>
                      <td>{question.createdAt}</td>
                      <td>
                        {/* {question.status === 'Pending' ? ( */}
                        <Dropdown>
                          <Dropdown.Toggle variant="secondary" id={`dropdown-${question._id}`}>
                            Select Option
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {question.options.map((option) => (
                              <Dropdown.Item
                                key={option}
                                onClick={() => {
                                  // updateCorrectOptionStatus(question._id);
                                  updateCorrectOption(question._id, option);
                                }}
                              >
                                {option}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* ) : (
                          question.correctOption
                        )} */}
                      </td>
                      <td>{question.isActive ? 'Yes' : 'No'}</td>
                      <td>{question.winningRatio.join(', ')}</td>
                      <td>{question.options.join(', ')}</td>
                      <td>{question.correctOption}</td>
                      {/* <td>
        
                          <Button
                            variant="primary"
                            onClick={() => updateCorrectOptionStatus(match._id)}
                          >
                            Set Correct
                          </Button>
                       
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </article>
      ))}
    </>
  );
}
