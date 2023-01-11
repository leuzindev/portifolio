import { Apresentation } from './components/Apresentation/Apresentation'
import './App.css'
import { About_me } from './components/About_me/About_me'
import { Projects } from './components/Projects/Projects'
import { Contacts } from './components/Contacts/Contacts'
import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'
function App() {
 

  return (
    <div className="App">
      <Home />
      <Apresentation/>
      <About_me />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
