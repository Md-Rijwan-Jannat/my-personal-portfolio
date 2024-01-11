const ImageSlider = ({ image }) => {
  return (
    <div className="w-full">
      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
        <div className="w-full h-[300px] md:h-[350px] lgl:h-96 p-5 mt-10 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
          <img
            className="w-full h-full rounded-lg object-contain"
            src={image.image}
            alt="project-page"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
