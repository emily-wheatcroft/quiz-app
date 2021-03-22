import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function FetchButton() {
  const questionCategory = useSelector(state => state.options.question_category)
  const questionDifficulty = useSelector(state => state.options.question_difficulty)
  const questionType = useSelector(state => state.options.question_type)

  const dispatch = useDispatch()

  const setLoading = value => {
    dispatch({
      type: 'CHANGE_LOADING',
      loading: value
    })
  }

  const setQuestions = value => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: value
    })
  }

  const handleQuery = () => {
    let apiUrl = `https://opentdb.com/api.php?amount=50`;
    if (questionCategory.length) {
      apiUrl = apiUrl.concat(`&category=${questionCategory}`)
    }

    if (questionDifficulty.length) {
      apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`)
    }

    if (questionType.length) {
      apiUrl = apiUrl.concat(`&type=${questionType}`)
    }

    setLoading(true);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setQuestions(response.results)
        setLoading(false);
      });
  }

  return <button onClick={handleQuery}>Get Started!</button>;
}
export default FetchButton;