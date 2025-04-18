import donk from '../assets/donk.gif';
import './about.css';
const About = () => {
  return <div className="allpagec">
    <p className='about1'>
      Hello, my name is Benjamin(ApuLTS) im studyng Software engineering (4y).
      
      I'm a kind of web developer, btw I'm more interested in front-end development, 
      I've always been drawn to minimalist stuff and things like this personal 
      website. 
      I hope Courier was the right choice for the font-family on this site. 
    </p>

			
    <img className="donk" src={donk} alt="donk" />
    <p className='about1'>
      About my stack: I use :  
      <span className="react">  React</span>,
      <span className="javascript"> JavaScript</span>
      <span className="Typescript">/Typescript</span>, 
      <span className="html"> HTML</span>,
      and <span className="css">CSS</span> for frontend development. <br />
      I can code in <span className="python">Python</span> and <span className="c">c++</span> too. <br />
    </p>
  </div>
};

export default About; 


