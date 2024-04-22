import "./Title.module.css";

export const Title = ({ title1, title2 }) => {
  // Separate the first two letters and the rest of the title
  const firstTwoLetters = title2.substring(0, 3);
  const restOfTitle = title2.substring(3);

  return (
    <section className="relative mb-24 lg:mb-28 text-center w-full button">
      <h1 className="text-[#4D4D4D] text-[30px] lg:text-[70px] text-opacity-30 font-[800]">
        {title1}
      </h1>
      <div className="absolute -bottom-4 w-full">
        <h1 className="text-[#4D4D4D] text-opacity-95 text-[25px] lg:text-[65px] font-[800] btn-shine">
          {" "}
          <span style={{ color: "#CD6A15" }}>{firstTwoLetters}</span>
          {restOfTitle}
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <span className="bottom"></span>
      </div>
    </section>
  );
};
