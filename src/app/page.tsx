
import About from "@/components/About";
import FAQ from "@/components/FAQ";
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
    <h1 className="italic text-6xl bg-purple-600 text-pink-100">Hello world</h1>
    </>
  );
}
