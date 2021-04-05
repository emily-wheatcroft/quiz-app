import { useSelector } from 'react-redux'

import Settings from './Components/Settings';
import Question from './Components/Question';
import FinalScreen from './Components/FinalScreen';

import './App.css';

function App() {
  const questions = useSelector(state => state.questions)
  const questionIndex = useSelector(state => state.index)

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <Settings />
  } else {
    component = <FinalScreen />
  }

  return (
    <div className="App">
      <div className="app-container">
        {component}
      </div>
    </div>
  )
}

export default App;
