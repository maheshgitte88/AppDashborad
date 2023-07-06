import React from 'react';
import AddQuestionForm from '../components/AddQuestionForm';

const AddQuestionPage = ({ matchId }) => {
  return (
    <div>
      <h2>Add Question</h2>
      <AddQuestionForm matchId={matchId} />
    </div>
  );
};

export default AddQuestionPage;
