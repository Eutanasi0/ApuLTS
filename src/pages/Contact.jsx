import './contact.css';
import Weirdo from '../assets/fakinweirdo.gif';

const Contact = () => {
  const to = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="allpagec">
      <div className="subcont">
        <img src={Weirdo} alt="fw" className="weirdo left-img" />
        <p>
          this is my <button className="githubbutton" onClick={() => to("https://github.com/Eutanasi0")}>github</button> account <br />
          I am in <button className="xbutton" onClick={() => to("https://x.com/apuleftthecrew")}>X</button> too <br />
          You can find me on <button className="linkedinbutton" onClick={() => to("https://linkedin.com/in/benjaminfloresgomez")}>linkedin</button> <br />
          BTW, if you want to hear <br />
          my music, you can listen <br />
          here: <button className="soundcloudbutton" onClick={() => to("https://soundcloud.com/benjaweadas")}>soundcloud</button> and
          <button className="spotifybutton" onClick={() => to("https://open.spotify.com/intl-es/artist/1BX7IRaBl7S2AuWpsz3Lou?si=TTQVWfgjR4iL_GpeHOZC0w")}>spotify</button> <br />
          send me a <button className="emailbutton" onClick={() => to("mailto:benjaminflores4e@gmail.com")}> mail </button> <br />
        </p>
        <img src={Weirdo} alt="fw" className="weirdo right-img" />
      </div>
    </div>
  );
};

export default Contact;