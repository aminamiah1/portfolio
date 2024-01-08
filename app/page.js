import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import AboutSection from "@/components/aboutSection";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url(/stars.png)" }}
      className="relative flex flex-col justify-between w-full min-h-screen bg-black "
    >
      <Navbar />
      <Landing />
      <AboutSection />
    </main>
  );
}
