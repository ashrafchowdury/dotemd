import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className=" flex items-center">
      <div className=" lg:w-full lg:h-full w-[35px] h-[20px]">
        <Image
          src="./assets/logo.svg"
          width={40}
          height={24}
          alt="dotemd logo"
          loading="lazy"
        />
      </div>
      <h1 className=" ml-2 lg:text-3xl text-2xl font-bold">dotemd</h1>
    </Link>
  );
};

export default Logo;
