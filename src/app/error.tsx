"use client";
import Button from "@/components/ui/Button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className=" h-[80vh] flex flex-col justify-center items-center">
      <p className=" lg:text-4xl md:text-3xl text-2xl font-semibold mb-10 text-center">
        Something went wrong!
      </p>
      <Button style="!py-3" onclick={() => reset()}>
        Try again
      </Button>
    </div>
  );
};

export default Error;
