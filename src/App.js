import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList />} />
      </Routes>
    </div>
  );
}

export default App;
