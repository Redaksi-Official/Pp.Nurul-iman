import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Landingpage from "./components/Landingpage";
import AboutMe from "./components/Aboutme";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <NavigationBar />
      </div>

      <div className="LandingPG">
        <Landingpage />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}

export default App;
