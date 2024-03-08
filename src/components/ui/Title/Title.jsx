import "./Title.module.css";

export const Title = ({ title1, title2 }) => {
  return (
    <section className="relative mb-24 lg:mb-28 text-center w-full button">
      <h1 className="text-[#4D4D4D] text-[30px] lg:text-[70px] text-opacity-30 font-[800]">
        {title1}
      </h1>
      <div className="absolute -bottom-4 w-full">
        <h1
          className="text-[#4D4D4D] text-opacity-95 text-[30px] lg:text-[65px] font-[800] btn-shine"
          target="_blank"
        >
          {" "}
          {title2}
        </h1>
      </div>
    </section>
  );
};
