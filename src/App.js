import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddQuestionForm from './components/AddQuestionForm';
import AddQuestionPage from './Pages/AddQuestionPage';
import AllBets from './Pages/AllBets';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/question" element={<AddQuestionForm />} />
        <Route exact path="/Addquestion" element={<AddQuestionPage />} />
        <Route exact path="/allbets" element={<AllBets />} />
      </Routes>
    </BrowserRouter>
  );
};
// const App = () => {
//   return (
//     <BrowserRouter>
 

//           <Routes>
//             <Route exact path="/" component={<Home />} />
//             {/* <Route exact path="/about" component={<About />} />
//             <Route exact path="/products" component={<Products />} /> */}
//             {/* <Route
//               path="/products/:category"
//               render={(props) => (
//                 <Products category={props.match.params.category} />
//               )}
//             /> */}
//             {/* <Route exact path="/contact" component={<Contact/>} /> */}
//           </Routes>
 
    
//     </BrowserRouter>
//   );
// }; 

export default App;
