import { useSelector } from 'react-redux'

import Settings from './Components/Settings';
import FetchButton from './Components/FetchButton';
import Question from './Components/Question';

import './App.css';

function App() {
  const questions = useSelector(state => state.questions)

  if (questions.length) {
    return (
      <Question />
    )
  }

  if (!questions.length) {
    return (
      <div className="App">
        <h1>Quiz App</h1>
        <Settings />
        <FetchButton />
      </div>
    )
  }
}

export default App;
