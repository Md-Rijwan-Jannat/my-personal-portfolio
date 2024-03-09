export const Button = ({ text, icon }) => {
  return (
    <button className="flex items-center gap-3 whitespace-nowrap w-full px-4">
      {text}
      {icon}
    </button>
  );
};
