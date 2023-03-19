"use client"
import Slider from "react-slick";
import { StyledSlider } from "./styles";
interface ICarouselWorksTypes {
  children: React.ReactNode;
}
export const CarouselWorksTypes = ({ children }: ICarouselWorksTypes) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return <StyledSlider {...settings}>{children}</StyledSlider>;
};
