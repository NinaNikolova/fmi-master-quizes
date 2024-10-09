import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Quiz1 from './components/Quiz1'; // Import your Quiz1 component
import Quiz2 from './components/Quiz2'; // Import your Quiz2 component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz1" element={<Quiz1 />} />
        <Route path="/quiz2" element={<Quiz2 />} />
      </Routes>
    </Router>
  );
}

export default App;
