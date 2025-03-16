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
      About my stack: I use
      <span className="react"> React</span>,
      <span className="javascript">JavaScript</span>
      <span className="Typescript">/Typescript</span>,
      <span className="html">HTML</span>,
      and <span className="css">CSS</span> for frontend <br />development. <br />
      Also i can code in 
      <span className='python'> Python</span> and
      <span className='c'> c++</span>.
    </p>
    <img className="donk" src={donk} alt="donk" />

  </div>
};

export default About;