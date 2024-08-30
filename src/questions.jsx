import React, { useState, useEffect } from "react";
import './App.css';
import Componente from "./multicomps";
import Result from "./result";

const QuestionComponent = ({ onComplete, mcq, anscheck, anscheckfunc }) => {


  const [currentIndex, setCurrentIndex] = useState(0)


  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);

  };
 



  const onhandlenext = (e) => {
    e.preventDefault();
    const abc = [...anscheck]//why new array
    if (mcq[currentIndex].correct === selectedOption) {
      abc.push(mcq[currentIndex])
    }
    console.log(abc)
    if (currentIndex < mcq.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption('');
    } else {
      const correctAnswersCount = abc.length
      onComplete(correctAnswersCount);
    }
    anscheckfunc(abc)

  }


  return (

    <>

      <div className="question-text">
        {/* {mcq.slice(0, 1).map((item) => (
          <p>{item.question}</p>
        ))} */}

      </div>
      <div>
        {mcq.map((item, Index) => {

          //setCurrentIndex(Index)
          return currentIndex === Index ?
            <Componente
              item={item}
              Index={Index}
              onhandlenext={onhandlenext}
              selectedOption={selectedOption}
              handleChange={handleChange}
              buttondisable={!selectedOption}


            /> : null;



        }




        )}

      </div>







    </>


  )
}

export default QuestionComponent

