import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="relative z-0">
          <Hero />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <About />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Tech />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Works />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        {/* cursor */}
        <AnimatedCursor
          innerSize={10}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "white",
          }}
          outerStyle={{
            border: "3px solid white",
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
