const HorizontalLine = ({ style }: { style?: string }) => {
  return <div className={`w-full h-[1px] bg-glass ${style}`}></div>;
};

export default HorizontalLine;
