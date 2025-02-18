import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz1/Quiz';
import Quiz2 from './components/Quiz2/Quiz2';
import Quiz3 from './components/Quiz3/Quiz3';
import Quiz4 from './components/Quiz4/Quiz4';
import Quiz5 from './components/Quiz5/Quiz5';
import Quiz6 from './components/Quiz6/Quiz6';
import UnderConstruction from './components/UnderConstruction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<UnderConstruction />} /> */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/quiz3" element={<Quiz3 />} />
        <Route path="/quiz4" element={<Quiz4 />} />
        <Route path="/quiz5" element={<Quiz5 />} />
        <Route path="/quiz6" element={<Quiz6 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
