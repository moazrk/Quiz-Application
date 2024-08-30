import React, { useState, useEffect } from "react";
import './App.css';

const Componente = ({ item, Index, onhandlenext, selectedOption, handleChange , buttondisable }) => {




    return (

        <div key={Index} className="question-block">
            <div className="question-text">
                <p>Q. {item.question}</p>
            </div>
            {item.choices.map((items, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        id={`radio-${Index}-${index}`}
                        name={`choices-${Index}`}
                        value={items}
                        checked={selectedOption === items}
                        onChange={(e) => handleChange(e, Index)}
                    />
                    <label htmlFor={`radio-${Index}-${index}`}>{items}</label>
                </div>
            ))}
            <div className="submit-button">
                <button onClick={onhandlenext} disabled={buttondisable}>Next---</button>
            </div>
        </div>
    )

}
export default Componente






