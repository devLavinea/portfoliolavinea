import React from "react";
import "./index.css";

import{
Navbar,
Hero,
Cta,
Services,
Tech,
Experience,
Works,
Feedbacks,
Contact,
Whatsapp,
StarsCanvas
} from "./components";



const App = () => {
  return (
    <div className="relative flex-col items-center justify-center z-0 bg-primary overflow-x-hidden w-full">
      <div className="bg-custom bg-cover bg-no-repeat bg-center">
        {/* <Whatsapp />   */}
        <Navbar />
        <Cta />
        <Hero />
      </div>
      <Works />
      <Experience />
      <Tech />
      <Services />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas/>
      </div>
    </div>
  );
};

export default App;
