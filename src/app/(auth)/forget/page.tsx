"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";

const Page = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="flex flex-col lg:flex-row justify-center items-start lg:space-x-9">
      <div className=" w-full lg:w-[300px] mb-10 lg:mb-0">
        <h1 className=" text-2xl md:text-3xl font-semibold mb-4">
          Forget Passowrd
        </h1>
        <p className=" text-sm md:text-[16px]">
          Quickly enter your email to get back your account.
        </p>
      </div>

      <div className="w-full sm:w-[400px]">
        <p className=" text-[16px] md:text-lg font-medium mb-6">
          Forget Password
        </p>

        <label className=" font-medium">Enter your Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          className="w-full px-4 py-3 text-sm md:text-[16px] rounded-lg bg-glass mt-2 mb-5"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Button style="w-full bg-primary flex justify-center font-semibold rounded-lg px-4 py-3 mt-9">
          Submit
        </Button>
      </div>
    </section>
  );
};

export default Page;
