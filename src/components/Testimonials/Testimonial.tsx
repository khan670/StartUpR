import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { testimonialsData } from "../../data/Testimonial";
import Slider from "react-slick";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

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
    touchMove: true,
  };
  return (
    <section
      className="flex flex-col w-full lg:flex-row justify-between sm:px-16 px-5 items-center mt-32 relative z-20"
      id="testimonials"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.7, delay: 0.5 },
        }}
        className=" lg:w-1/2 w-full flex flex-col gap-5"
      >
        <h3 className="sm:text-sm text-xs font-medium tracking-wider text-color-theme flex gap-1 items-center ">
          Testimonials <img src="/divider.png" alt="" />
        </h3>
        <SectionHeading
          text="Authenticity, honesty, & personal voice"
          className="md:w-3/4 w-full"
        />
        <div className="flex gap-5 items-center">
          <IoIosArrowRoundBack
            onClick={() => ref?.current?.slickPrev()}
            className="text-gray-300 hover:text-color-theme  transition-all duration-300  cursor-pointer sm:text-5xl text-3xl"
          />
          <IoIosArrowRoundForward
            onClick={() => ref?.current?.slickNext()}
            className="text-gray-300  hover:text-color-theme transition-all duration-300  cursor-pointer sm:text-5xl text-3xl"
          />
        </div>
      </motion.div>
      <div className="lg:w-1/2 w-full">
        <Slider className=" w-full mt-5 lg:mt-0" {...settings} ref={ref}>
          {testimonialsData.map((item) => (
            <div className="flex flex-col items-center w-full">
              <div className="sm:w-24 w-20 h-20 sm:h-24 overflow-hidden shadow-custom-shadow relative top-16 rounded-full border-4 border-color-theme ml-2">
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
                className="bg-no-repeat shadow-custom-shadow bg-white py-16 sm:px-10 px-5 sm:w-4/5 w-full  rounded-custom-radius mt-5 "
              >
                <p className="sm:text-sm text-sm text-color-text leading-[1.5]">
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
    </section>
  );
};

export default Testimonial;
