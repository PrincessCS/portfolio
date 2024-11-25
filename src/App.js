import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
