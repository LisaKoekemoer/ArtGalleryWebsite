import './App.css';
import Homepage from './components/Homepage';
import Location from './components/Location';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
