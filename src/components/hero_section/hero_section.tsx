import Wrapper from "../wrapper";
import HeroAds from "./heroAds";

function HeroSection() {
  const ads = [
    {
      title: "The Best Platform for Car Rental",
      description:
        "Ease of doing a car rental safely and reliably. Of course at a low price.",
      buttonText: "Rent Car",
      imageUrl: "/images/car_1.png",
      backgroundColor: "information-500",
      buttonBg: "primary-dark-500",
    },
    {
      title: "Easy way to rent a bike at a low price",
      description:
        "Providing cheap bike rental services and safe and comfortable facilities.",
      buttonText: "Rent Bike",
      imageUrl: "/images/car_2.png",
      backgroundColor: "primary-dark-500",
      buttonBg: "information-500",
    },
  ];
  return (
    <Wrapper>
      <div className=" flex md:flex-row flex-col justify-between gap-6  py-8">
        {ads.map((ad, index) => (
          <HeroAds key={index} {...ad} />
        ))}
      </div>
    </Wrapper>
  );
}

export default HeroSection;
