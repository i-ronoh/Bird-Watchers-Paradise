import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'
import Birds from './components/Birds'
import Sightings from './components/Sightings'
import Gallery from './components/Gallery'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (

      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/birds' element={<Birds/>} />
          <Route exact path='/sightings/:birds_id' element={<Sightings/>} />
          <Route exact path='/gallery' element={<Gallery/>} />

        </Routes>
      </Router>
 
)}

export default App;
