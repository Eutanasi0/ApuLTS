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
      I hope Courier was the right choice for the font-family on this site. <br />
    </p>
    <img className="donk" src={donk} alt="donk" />
    <p>
      About my stack: I use <br />
      <span className="react"> React</span>,
      <span className="javascript">JavaScript</span>
      <span className="Typescript">/Typescript</span>, <br />
      <span className="html">HTML</span>,
      and <span className="css">CSS</span> for frontend development. <br />
    </p>
  </div>
};

export default About;