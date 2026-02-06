
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Professional from "@/components/Professional";
import Speciality from "@/components/Specialties";

export default function Home() {
  return (
    <>
    <Hero/>
  
    <Introduction/>
    <Speciality/>
    <Help/>
    <About/>
    <FAQ/>
    <Professional/>
    <CTA/>
    
    <Footer/>
    </>
  );
}
