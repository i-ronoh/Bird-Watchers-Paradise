import './App.css';
import Navigation from './components/Navigation'
import Birds from './components/Birds'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (

      <Router>
        <Navigation />
        <Routes>
          {/* <Route exact path='/' element={<Header/>} /> */}
          <Route exact path='/birds' element={<Birds/>} />
          {/* <Route exact path='/register' element={<Sightings/>} /> */}

        </Routes>
      </Router>
 
)}

export default App;
