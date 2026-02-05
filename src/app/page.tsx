
import About from "@/components/About";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Speciality from "@/components/Specialties";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Introduction/>
    <Speciality/>
    <Help/>
    <About/>
    <h1 className="italic text-6xl bg-purple-600 text-pink-100">Hello world</h1>
    </>
  );
}
