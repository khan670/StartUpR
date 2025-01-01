import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { testimonialsData } from "../../data/Testimonial";
import Slider from "react-slick";

const Testimonial: React.FC = () => {
  const ref = useRef<any>(null);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
  };
  return (
    <div className="flex justify-between px-16 items-center mt-32 relative z-20">
      <div className=" w-1/2 flex flex-col gap-5">
        <h3 className="text-sm font-medium tracking-wider text-color-theme flex gap-1 items-center ">
          Testimonials <img src="/divider.png" alt="" />
        </h3>
        <h1 className="text-5xl text-color-body leading-[1.2] font-extrabold w-3/4 ">
          Authenticity, honesty, & personal voice
        </h1>
        <div className="flex gap-5 items-center">
          <IoIosArrowRoundBack
            size={50}
            onClick={() => ref?.current?.slickPrev()}
            className="text-gray-300 hover:text-color-theme  transition-all duration-300  cursor-pointer"
          />
          <IoIosArrowRoundForward
            size={50}
            onClick={() => ref?.current?.slickNext()}
            className="text-gray-300  hover:text-color-theme transition-all duration-300  cursor-pointer"
          />
        </div>
      </div>
      <Slider className="w-1/2" {...settings} ref={ref}>
        {testimonialsData.map((item) => (
          <div className="flex flex-col items-center w-full">
            <div className="w-24 h-24 overflow-hidden shadow-custom-shadow relative top-16 rounded-full border-4 border-color-theme ml-2">
              <img
                src={item.image}
                className="rounded-full object-cover w-full h-full"
                alt=""
              />
            </div>
            <div
              style={{
                backgroundImage: "url('/quote.png')",
                backgroundPosition: "right bottom",
                backgroundSize: "150px",
              }}
              className="bg-no-repeat shadow-custom-shadow bg-white py-16 px-10 w-4/5  rounded-custom-radius mt-5 "
            >
              <p className="text-sm text-color-text leading-[1.5]">
                {item.feedback}
              </p>
            </div>
            <h3 className="bg-color-theme inline-block shadow-custom-shadow px-5 py-2 mt-2 text-white rounded-3xl text-sm">
              {item.name}
            </h3>
            <span className="text-xs text-color-text mt-2 ml-2">
              {item.title}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
