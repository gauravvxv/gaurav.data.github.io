import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection'
import Offerings from './components/Offering';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import About from './components/About';
import CoreSkills from './components/Skills';
import Education from './components/Educations';
import Projects from './components/Projects';
import Footer from './components/Footer';
export default function Home() {
  return (
  <>

   <Navbar />
  <HomeSection/>
  <About/>
  <CoreSkills/>
  <Projects/>
  <Education/>
  <Offerings/>
  <WhyWorkWithMe/>
  <Contact/>
  <Footer/>
  
  </>
  );
}
