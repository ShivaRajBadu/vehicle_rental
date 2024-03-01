import CarInfo from "@/components/car_details/CarInfo";

import CarReviews from "@/components/car_details/CarReviews";

import CustomCarousel from "@/components/carousel";
import Wrapper from "@/components/wrapper";
import { generateImage } from "@/utils/imageGenerator";

const CarDetails = () => {
  //   const images = generateImage(10);
  const images = [
    {
      src: "/images/image_1.jpg",
      alt: "images",
    },
    {
      src: "/images/image_2.jpg",
      alt: "images",
    },
    {
      src: "/images/image_3.jpg",
      alt: "images",
    },
    {
      src: "/images/image_4.jpg",
      alt: "images",
    },
  ];
  return (
    <div className="py-8">
      <Wrapper>
        <div className="flex flex-col lg:flex-row  gap-8  justify-between">
          <div className="w-full lg:w-[40%]">
            <CustomCarousel images={images} />
          </div>
          <CarInfo />
        </div>
        <CarReviews />
      </Wrapper>
    </div>
  );
};

export default CarDetails;
