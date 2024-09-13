import "./About.css";
import camera from "../assets/3dcamera1.jpg";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="flex">
        <div className="flex2">
          <img src={camera} alt="Camera" className="image1" />
        </div>
        <div className="flex3">
          <h1>My name is Vasu...</h1>
          <h3>Digital creator</h3>
          <button>Know more about me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
