import { Navbar } from "./components/navbar";
import { UnderBar } from "./components/bar";
import { Hero } from "./components/heroSection";
import { Hero2 } from "./components/hero2";
import {Footer} from "./components/footer"

function App() {
  return (
    <div className=" w-full min-h-full  flex flex-col overflow-hidden">
      <Navbar />
      <UnderBar />
      <Hero />
      <Hero2/>
      <hr className="font-bold text-stone-300"/>
      <Footer/>
    </div>
  );
}

export default App;
