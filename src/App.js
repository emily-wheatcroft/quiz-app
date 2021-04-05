import { useSelector } from 'react-redux'

import Settings from './Components/Settings';
import FetchButton from './Components/FetchButton';
import Question from './Components/Question';
import FinalScreen from './Components/FinalScreen';

import './App.css';

function App() {
  const questions = useSelector(state => state.questions)
  const questionIndex = useSelector(state => state.index)

  if (questions.length && questionIndex + 1 <= questions.length) {
    return (
      <div className="App">
        <div className="app-container">
          <Question />
        </div>
      </div>
    )
  }

  if (!questions.length) {
    return (
      <div className="App">
        <div className="app-container">
          <h1>Quiz App</h1>
          <Settings />
          <FetchButton text="Get started!" />
        </div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <div className="app-container">
          <FinalScreen />
        </div>
      </div>
    )
  }
}

export default App;
