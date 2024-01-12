import Slider from "react-slick";
import ImageSlider from "../Slider/ImageSlider";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { useState } from "react";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-1000 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-1000 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const SliderModal = ({ isOpen, images, closeToggleModal }) => {
  const [dotActive, setDocActive] = useState(0);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeToggleModal();
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <div className="relative flex justify-center">
      {isOpen && (
        <div
          data-aos="zoom-in"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden bg-black bg-opacity-60 w-full flex items-center justify-center"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#202223] w-11/12 md:w-1/2 lg:w-[600px] h-auto p-5 rounded-lg">
            <Slider {...settings}>
              {images.map((image) => (
                <ImageSlider key={image.id} image={image}></ImageSlider>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderModal;
