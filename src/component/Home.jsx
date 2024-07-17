import About from "./about";
import Slidercom from "./common/slidercom";
import Contactus from "./contact";
import Herosection from "./herosection";

const Home = () => {
  return (
    <div>
      <Slidercom />
      <Herosection />
      <div id="about" className="my-10">
        <About />
      </div>
      <div id="contact" className="my-10">
        <Contactus />
      </div>
    </div>
  );
};

export default Home;
