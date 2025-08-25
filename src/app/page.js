import Image from "next/image";
import HeroSection from "./components/home/Herosection";
import StatsSection from "./components/home/StatsSection";
import YouTubeVideoSection from "./components/home/YouTubeVideoSection";
import AnimationSection from "./components/home/Animation";
import HighlightsSection from "./components/home/Highlights";
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <YouTubeVideoSection />
      <AnimationSection />
      <HighlightsSection />
    </>
  );
}
