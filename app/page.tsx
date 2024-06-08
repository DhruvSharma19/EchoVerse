import Comparision from "@/components/home/Comparision";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import People from "@/components/home/People";

export default function Home() {
  return (
    <main className="relative">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto overflow-hidden">
          <Hero/>
          <Comparision/>
          <People/>
        </div>
          <Footer/>
        <svg className='absolute top-0 left-0 bottom-0 right-0 opacity-20 ' width="100%" height="100%">
          <pattern id="smallGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#fff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
    </main>
  );
}
