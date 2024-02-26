import CarSection from "@/components/car_section/CarSection";
import HeroSection from "@/components/hero_section/hero_section";
import PickSection from "@/components/pick_section/pick_section";
import Wrapper from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <HeroSection />
      <PickSection />
      <CarSection title="Popular Car" />
      <CarSection title="Recommended Car" />
    </Wrapper>
  );
}
