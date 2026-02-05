import Header from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <h1 className="italic text-6xl bg-purple-600 text-pink-100">Hello world</h1>
    </>
  );
}
