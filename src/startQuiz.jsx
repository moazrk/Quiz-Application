import React from "react";
import './App.css';

const QuizComponent = ({ onStart }) => {
    
    return(

        <div className="start">

            <h1>
                CHEMISTRY QUIZ
            </h1>

            <h3>Determine Your Chemistry Knowledge With This Short Quiz</h3>

           
            <button  className="startbutton" onClick={onStart}>Start Quiz</button>

        </div>
        
    )
}

export default QuizComponent