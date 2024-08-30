// 

import React from 'react';

const Result = ({ correctAnswers }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>You got {correctAnswers} correct answers.</p>
    </div>
  );
};

export default Result;
