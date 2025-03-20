import Box from '../components/box/Box';

const Explore = () => {
  return <div className="allpagec">
    <Box
      proyectName={
      "MyLocal"
      }
      description={
        "know more about peruvian escene (in process)"
      }
      githublink={
        "https://github.com/Eutanasi0/Mylocal?tab=readme-ov-file"
      }
     
    />

    <Box
      proyectName={
      "Cube.js"
      }
      description={
        "play with my cube , make me happy"
      }
      githublink={
        "https://github.com/Eutanasi0/Cube.js"
      }
      projectlink={
        "https://cubejs-one.vercel.app/"
      }
    />

  </div>
};

export default Explore;