import { useSelector } from 'react-redux'

import Settings from './Components/Settings';
import FetchButton from './Components/FetchButton';
import Question from './Components/Question';

import './App.css';

function App() {
  const questions = useSelector(state => state.questions)

  if (questions.length) {
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
          <FetchButton />
        </div>
      </div>
    )
  }
}

export default App;
