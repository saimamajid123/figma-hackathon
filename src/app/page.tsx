import Navbar from "./navbar/page";
import About from "./about/page";
import MissionStatement from "./MissionStatement/page";
import ProjectGallery from "./projects/page";
import ContactForm from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <About/>
    <MissionStatement/>
    <ProjectGallery/>
    <ContactForm/>
    <Footer/>
  </div>  
  );
}
