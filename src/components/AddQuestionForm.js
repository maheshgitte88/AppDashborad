import React, { useState } from 'react';
import axios from 'axios';

const AddQuestionForm = ({ matchId }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [ratios, setRatios] = useState([]);

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.value;
    setOptions(updatedOptions);
  };

  const handleRatioChange = (e, index) => {
    const updatedRatios = [...ratios];
    updatedRatios[index] = parseFloat(e.target.value);
    setRatios(updatedRatios);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
    setRatios([...ratios, 1]);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    const updatedRatios = ratios.filter((_, i) => i !== index);
    setOptions(updatedOptions);
    setRatios(updatedRatios);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuestion = {
      matchId,
      question,
      options,
      ratios,
    };
    try {
      const response = await axios.post('http://localhost:4000/question/add/64a45285d2e3686003d6c63e', newQuestion);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Question:</label>
        <input type="text" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div>
        <label htmlFor="options">Options:</label>
        {options.map((option, index) => (
          <div key={index}>
            <input type="text" value={option} onChange={(e) => handleOptionChange(e, index)} />
            <input type="number" value={ratios[index]} onChange={(e) => handleRatioChange(e, index)} />
            <button type="button" onClick={() => handleRemoveOption(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>
          Add Option
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddQuestionForm;
















// import React, { useState } from 'react';
// import axios from 'axios';

// const AddQuestionForm = () => {
//   const [matchId, setMatchId] = useState('');
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState([]);
//   const [correctOption, setCorrectOption] = useState('');

//   const handleMatchIdChange = (e) => {
//     setMatchId(e.target.value);
//   };

//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleOptionChange = (index, e) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = e.target.value;
//     setOptions(updatedOptions);
//   };

//   const handleCorrectOptionChange = (e) => {
//     setCorrectOption(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const newQuestion = {
//         matchId: matchId,
//         question: question,
//         options: options,
//         correctOption: correctOption,
//       };

//       await axios.post('http://localhost:4000/question/addQuestion', newQuestion);
//       // Handle success, display a success message, or redirect

//       // Clear form fields
//       setMatchId('');
//       setQuestion('');
//       setOptions([]);
//       setCorrectOption('');
//     } catch (error) {
//       console.error(error);
//       // Handle error, display an error message, or perform error handling
//     }
//   };

//   return (
//     <div>
//       <h2>Add Question</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="matchId">Match ID:</label>
//           <input
//             type="text"
//             id="matchId"
//             value={matchId}
//             onChange={handleMatchIdChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="question">Question:</label>
//           <textarea
//             id="question"
//             value={question}
//             onChange={handleQuestionChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="options">Options:</label>
//           {options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               value={option}
//               onChange={(e) => handleOptionChange(index, e)}
//               required
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => setOptions([...options, ''])}
//           >
//             Add Option
//           </button>
//         </div>

//         <div>
//           <label htmlFor="correctOption">Correct Option:</label>
//           <select
//             id="correctOption"
//             value={correctOption}
//             onChange={handleCorrectOptionChange}
            
//           >
//             <option value="">Select correct option</option>
//             {options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddQuestionForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const AddQuestionForm = ({ matchId }) => {
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState([]);
//   const [correctOption, setCorrectOption] = useState('');

//   const handleOptionChange = (e, index) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = e.target.value;
//     setOptions(updatedOptions);
//   };

//   const handleAddOption = () => {
//     setOptions([...options, '']);
//   };

//   const handleRemoveOption = (index) => {
//     const updatedOptions = options.filter((_, i) => i !== index);
//     setOptions(updatedOptions);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newQuestion = {
//       matchId,
//       question,
//       options,
//       correctOption,
//     };

//     try {
//       const response = await axios.post('http://localhost:4000/question/add/64a45285d2e3686003d6c63e', newQuestion);
//       console.log(response.data);
//       // Handle success or perform any additional actions
//     } catch (error) {
//       console.error(error);
//       // Handle error or display error message to the user
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="question">Question:</label>
//         <input type="text" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} />
//       </div>
//       <div>
//         <label htmlFor="options">Options:</label>
//         {options.map((option, index) => (
//           <div key={index}>
//             <input type="text" value={option} onChange={(e) => handleOptionChange(e, index)} />
//             <button type="button" onClick={() => handleRemoveOption(index)}>
//               Remove
//             </button>
//           </div>
//         ))}
//         <button type="button" onClick={handleAddOption}>
//           Add Option
//         </button>
//       </div>
//       <div>
//         <label htmlFor="correctOption">Correct Option:</label>
//         <input type="text" id="correctOption" value={correctOption} onChange={(e) => setCorrectOption(e.target.value)} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AddQuestionForm;
