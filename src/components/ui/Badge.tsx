type BadgeType = {
  title: string;
  variant?: "red" | "green" | "blue" | "orange";
};

const Badge = ({ title, variant }: BadgeType) => {
  return (
    <span
      className={`flex items-center justify-center text-[10px] w-10 h-5 rounded-full ml-2 bg-glass`}
      style={{  outline: `2px solid ${variant}`,  }}
    >
      {title}
    </span>
  );
};

export default Badge;
