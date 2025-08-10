import React, { useState, useRef } from "react";
import { BannerData } from "../../../assets/mockdata";


// Simulated Slider component that matches react-slick API
const Slider = React.forwardRef(({ children, ...settings }, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  // Auto-advance slides if autoplay is enabled
  React.useEffect(() => {
    if (settings.autoplay) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, settings.autoplaySpeed || 3000);
      return () => clearInterval(timer);
    }
  }, [settings.autoplay, settings.autoplaySpeed, totalSlides]);

  // Handle slide change
  React.useEffect(() => {
    if (settings.beforeChange) {
      settings.beforeChange(currentSlide, currentSlide);
    }
  }, [currentSlide, settings]);


  React.useImperativeHandle(ref, () => ({
    slickGoTo: (slide) => {
      setCurrentSlide(slide);
    },
    slickNext: () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    },
    slickPrev: () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    },
  }));

  const childrenArray = React.Children.toArray(children);

  return (
    <div className="slick-slider">
      {/* Slider track */}
      <div className="slick-list overflow-hidden">
        <div
          className="slick-track flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {childrenArray.map((child, index) => (
            <div key={index} className="slick-slide min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Custom dots */}
      {settings.dots && settings.appendDots && (
        <div className="slick-dots">{settings.appendDots()}</div>
      )}
    </div>
  );
});

function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = BannerData.length;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: () => {
      const isFirst = currentSlide === 0;
      const isLast = currentSlide === totalSlides - 1;

      // Decide which actual slides these 3 dots represent
      const dotTargets = isFirst
        ? [0, 1, 2]
        : isLast
          ? [totalSlides - 3, totalSlides - 2, totalSlides - 1]
          : [currentSlide - 1, currentSlide, currentSlide + 1];

      return (
        <ul className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((dot, index) => {
            const isActive =
              (isFirst && index === 0) ||
              (isLast && index === 2) ||
              (!isFirst && !isLast && index === 1);

            return (
              <li
                key={index}
                onClick={() => sliderRef.current?.slickGoTo(dotTargets[index])}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${isActive ? "bg-pink-500" : "bg-gray-400"
                  }`}
              ></li>
            );
          })}
        </ul>
      );
    },
  };

  return (
    <div className="slider-container bg-gradient-to-br from-purple-50 to-pink-50">

      <Slider ref={sliderRef} {...settings}>
        {BannerData.map((el, i) =>

            (
console.log(el, i),

              <div key={i}>
                <div className="flex items-center justify-between px-8 py-12 ">
                  {/* Left Content */}
                  <div className="flex-1 max-w-lg">
                    <div className="mb-4">
                      <p className="text-pink-500 text-sm font-medium mb-2">
                        {el.subtitle}
                      </p>
                      <h2 className="text-4xl font-bold text-gray-800 mb-2 leading-tight">
                        {el.title}
                      </h2>

                      <p className="text-gray-600 mb-8 leading-relaxed">
                        {el.description}
                      </p>
                      <button className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium">
                        Shop Now
                      </button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="flex-1 flex justify-center items-center relative bg-red-300">
                    <div className="relative">
                      <img
                        src={el.image}
                        alt={el.title}
                        className="w-80 h-80 object-cover rounded-full shadow-2xl"
                      />
                      <div className="absolute -top-4 -right-4 bg-cyan-400 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                        50% off
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-60"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>
            ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
