import "@/styles/globals.css";
import Header from "@/components/header";
import Section from "@/components/section";

export default function App() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://wallpapercave.com/wp/wp7453677.jpg"
          alt="background image"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 ">
        <Header />
        <Section />
      </div>
    </div>
  );
}
