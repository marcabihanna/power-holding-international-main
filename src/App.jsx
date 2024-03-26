import HeroBanner from "./components/herobanner/HeroBanner";
import ParallaxSection from "./components/home/parallaxsection/ParallaxSection";
import Navbar from "./components/navigation/Navbar";
import image from "./assets/images/image1todelete.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import image4 from "./assets/images/image4.png";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <ParallaxSection />
      <img
        style={{
          width: "100%",
        }}
        src={image}
      ></img>
      <img
        style={{
          width: "100%",
        }}
        src={image2}
      ></img>
      <img
        style={{
          width: "100%",
        }}
        src={image3}
      ></img>
      <img
        style={{
          width: "100%",
        }}
        src={image4}
      ></img>
    </>
  );
}

export default App;
