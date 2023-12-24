import './App.css'
import Course from './Course'
import reactImg from './images/react.png';

function App() {

  return (
    <div>
     <Course title="Angular" 
     description="Lorem ipsum dolor sit amet" 
     image={reactImg}/>
    </div>
  )
}

export default App
