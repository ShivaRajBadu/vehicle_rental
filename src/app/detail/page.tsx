import CarFeature from "@/components/car_details/CarFeature";
import CarInfo from "@/components/car_details/CarInfo";
import CarReview from "@/components/car_details/CarReview";
import CarReviews from "@/components/car_details/CarReviews";
import FavoriteButton from "@/components/car_section/FavoriteButton";
import RentNowButton from "@/components/car_section/RentNowButton";
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
        <div className="flex  gap-8  justify-between">
          <div className="w-[40%]">
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
