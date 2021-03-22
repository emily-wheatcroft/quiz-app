import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Question() {
  const questions = useSelector(state => state.questions)
  const questionIndex = useSelector(state => state.index)

  const question = questions[questionIndex]
  const answer = question.correct_answer

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let options = [...question.incorrect_answers];
  options.splice(getRandomInt(options.length), 0, question.correct_answer)

  const handleListItemClick = event => {
    if (event.target.textContent === answer) {
      return console.log('correct')
    }
    return console.log('incorrect')
  }

  /*
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "easy",
      "question": "Peter Molyneux was the founder of Bullfrog Productions.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    }
  */

  return (
    <div>
      <p>Question {questionIndex + 1}</p>
      <h3>{question.question}</h3>
      <ul>
        {options.map((option, i) => <li key={i} onClick={handleListItemClick}>{option}</li>)}
      </ul>
    </div>
  )
}
export default Question;