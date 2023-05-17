type HeadingType = {
  label?: string;
  title: string;
  style?: string
};
const Heading = ({ label, title, style }: HeadingType) => {
  return (
    <>
      <p className=" lg:text-lg md:text-[16px] text-sm font-medium text-secondary mb-3 uppercase">{label}</p>
      <h2 className={`${style} lg:text-4xl md:text-3xl text-2xl font-bold`}>{title}</h2>
    </>
  );
};

export default Heading;
