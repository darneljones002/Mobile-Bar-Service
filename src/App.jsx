import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-earth-light text-earth-dark">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
