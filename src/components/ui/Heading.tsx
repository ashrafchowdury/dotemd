type HeadingType = {
  label?: string;
  title: string;
  style?: string;
};
const Heading = ({ label, title, style }: HeadingType) => {
  return (
    <>
      <p className=" lg:text-lg md:text-[16px] text-sm font-medium text-secondary mb-3 uppercase">
        {label}
      </p>
      <h2
        className={`${style} lg:text-4xl lg:leading-[52px] md:text-3xl md:leading-[45px] text-2xl leading-9 font-bold capitalize`}
      >
        {title}
      </h2>
    </>
  );
};

export default Heading;
