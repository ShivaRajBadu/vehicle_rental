import PopularCar from "@/components/car_section/PopularCar";
import HeroSection from "@/components/hero_section/hero_section";
import PickSection from "@/components/pick_section/pick_section";
import Wrapper from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <HeroSection />
      <PickSection />
      <PopularCar />
    </Wrapper>
  );
}
