import Header from "../components/Header";
import Hero from "../components/Hero";
import Aboutme from "../components/Aboutme";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-[#0A192F]">
        <Header />
        <main className="w-full flex flex-col">
          <Hero />

          <Aboutme />

          <Portfolio />

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
