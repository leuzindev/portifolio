import { Apresentation } from './components/Apresentation/Apresentation'
import './App.css'
import { About_me } from './components/About_me/About_me'
import { Projects } from './components/Projects/Projects'
function App() {
 

  return (
    <div className="App">
      <Apresentation/>
      <About_me />
      <Projects />
    </div>
  )
}

export default App
