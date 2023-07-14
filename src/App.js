import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddQuestionForm from './components/AddQuestionForm';
import AddQuestionPage from './Pages/AddQuestionPage';
import AllBets from './Pages/AllBets';
import AllMatch from './Pages/AllMatch';
import AllMatchesById from './Pages/AllMatchesById';
import './App.css'

const App = () => {


  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/question" element={<AddQuestionForm />} />
        <Route exact path="/Addquestion" element={<AddQuestionPage />} />
        <Route exact path="/allbets" element={<AllBets />} />
        <Route exact path="/allmatches" element={<AllMatch />} />
        <Route exact path="/allmatches/:id" element={<AllMatchesById />} />

      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
