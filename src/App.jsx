import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';


export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;