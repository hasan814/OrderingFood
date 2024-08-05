import { Toaster } from "react-hot-toast";

import Contact from "@/modules/Contact";
import About from "@/modules/About";
import Hero from "@/modules/Hero";
import Menu from "@/modules/Menu";

const Home = () => {
  return (
    <>
      <Toaster />
      <Hero />
      <Menu />
      <About />
      <Contact />
    </>
  );
};

export default Home;
