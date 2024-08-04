import About from "@/modules/About";
import Contact from "@/modules/Contact";
import Hero from "@/modules/Hero";
import Menu from "@/modules/Menu";
import { Toaster } from "react-hot-toast";

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
