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
    <div>
      <Wrapper>
        <div>
          <CustomCarousel images={images} />
        </div>
      </Wrapper>
    </div>
  );
};

export default CarDetails;
