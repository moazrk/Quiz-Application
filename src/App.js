// import logo from './logo.svg';
// import './App.css';
// import QuizComponent from './startQuiz';
// import QuestionComponent from './questions'
// import { useState } from 'react';
// import Result from './result';







// const App = () => {
//   const [quizStarted, setQuizStarted] = useState(false);

//   const startQuiz = () => {
//     setQuizStarted(true);
//   };

//   return (
//     <div className="App">
//       {!quizStarted ? <QuizComponent onStart={startQuiz} /> : <QuestionComponent />}

//     </div>
//   );
// };




// export default App;
// import React, { useState } from 'react';

// const App = () => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

//   const handleSelectChange = (event) => {
//     const value = event.target.value;
//     setSelectedOption(value);
//     setIsButtonDisabled(value === '');
//   };

//   return (
//     <div>
//       <select value={selectedOption} onChange={handleSelectChange}>
//         <option value="">Select an option</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       <button disabled={isButtonDisabled}>Submit</button>
//     </div>
//   );
// };

// export default App;
import './App.css';
import QuizComponent from './startQuiz';
import QuestionComponent from './questions';
import { useState } from 'react';
import Result from './result';
import TableComponent from './TableComponent';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [anscheck, anscheckfunc] = useState([]);


  const mcq = [

    {
      id: "1",
      question: "Whats the value of Avogadros constant",
      choices: ["3.42",
        "6.24*10^-23",
        "10.99",
        "13.22"],

      correct: "6.24*10^-23"





    },

    {
      id: "2",
      question: "How many electrons are there in the outer electron of Hydrogen",
      choices: ["1", "2", "3", "4"],
      correct: "3"
    },

    {
      id: "3",
      question: "How many protons are in the nucleus of Neon",
      choices: ["2", "6", "8", "10"],
      correct: "4"


    },


    {
      id: "4",
      question: "How many Carbon-Hydrogen bonds are in the structure of Benzene ",
      choices: ["13", "18", "24", "32"],
      correct: "18"

    }




  ]

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const completeQuiz = (correctAnswersCount) => {
    setCorrectAnswers(correctAnswersCount);
    setQuizCompleted(true);
  };


  return (
    <div className="App">
      {!quizStarted && !quizCompleted && <QuizComponent onStart={startQuiz} mcq={mcq} />}
      {quizStarted && !quizCompleted && <QuestionComponent onComplete={completeQuiz} mcq={mcq} anscheck={anscheck} anscheckfunc={anscheckfunc} />}
      {quizCompleted && <Result correctAnswers={correctAnswers} mcq={mcq} />}
      {quizCompleted && <TableComponent mcq={mcq} anscheck={anscheck}/>}

    </div>
  );
};

export default App;


