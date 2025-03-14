import donk from '../assets/donk.gif';
import './about.css';
const About = () => {
  return <div className="allpagec">
    <p>
      Hello, my name is Benjamin(ApuLTS) im studyng Software engineering (4y).<br />
      <br />
      I'm a kind of web developer, btw I'm more interested in front-end development, <br />
      I've always been drawn to minimalist stuff and things like this personal <br />
      website. <br />
      I hope Courier was the right choice for the font-family of this site. <br />
    </p>
    <img className="donk" src={donk} alt="donk" />
  </div>
};

export default About;