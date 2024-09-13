import About from "./About";
import Contact from "./Contact";
import "./Home.css";
import Services from "./Services";
import Works from "./Works";
import dcamera from "../assets/3dcamera1.jpg";

const Home = () => {
  return (
    <div className="container">
      <ul className="navbar">
        <li>Home</li>
        <li>about</li>
        <li>Works</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div>
        <h1>Home</h1>
        <div className="flex-display1">
          <div className="flex-2">
            <h1>Think, Create, Make it..</h1>
            <button>What we do</button>
          </div>
          <div className="flex-3">
            <img src={dcamera} alt="Camera" className="image" />
          </div>
        </div>
        <About />
        <Works />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
