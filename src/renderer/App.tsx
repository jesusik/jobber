import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}
