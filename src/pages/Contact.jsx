import './contact.css';
const Contact = () => {

  const to = (url) => {
    window.open(url, "_blank");
  };

  return <div className="allpagec">
    <p>
      this is my <button className="githubbutton" onClick={() => to("https://github.com/Eutanasi0")} >github</button> account <br />
      I am in <button className="xbutton" onClick={() => to("https://x.com/apuleftthecrew")}>X</button> too <br />
      You can find me on <button className="linkedinbutton" onClick={() => to("www.linkedin.com/in/benjaminfloresgomez")}>linkedin</button> <br />
    </p>
  </div>
};

export default Contact;