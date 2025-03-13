import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="nav-logo">ApuLTS</div>
      <ul className="nav-menu">
        <li><Link to="/"><button>Home</button></Link></li>
        <li><Link to="/explore"><button>Explore</button></Link></li>
        <li><Link to="/about"><button>About</button></Link></li>
        <li><Link to="/contact"><button>Contact</button></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;