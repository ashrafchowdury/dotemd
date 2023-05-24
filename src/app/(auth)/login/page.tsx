"use client";
import { useState } from "react";
import { GithubIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Link from "next/link";

const Page = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <section className="flex flex-col lg:flex-row justify-center items-start lg:space-x-9">
      <div className=" w-full lg:w-[300px] mb-10 lg:mb-0">
        <h1 className=" text-2xl md:text-3xl font-semibold mb-4">
          Log in or create an account
        </h1>
        <p className=" text-sm md:text-[16px]">
          Quickly get started by signing in using your existing accounts.
        </p>
      </div>

      <div className="w-full sm:w-[400px]">
        <p className=" text-[16px] md:text-lg font-medium mb-6">
          Choose you signing methods
        </p>

        <Button style="w-full py-3 flex items-center justify-center">
          <GithubIcon style="text-2xl mr-2" /> Log in with Github
        </Button>

        <HorizontalLine style="my-5" />

        <label className=" font-medium">Enter your Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          className="w-full px-4 py-3 text-sm md:text-[16px] rounded-lg bg-glass mt-2 mb-5"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />

        <label className=" text-sm md:text-[16px] font-medium">
          Paswword add minimum 8 characters
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full px-4 py-3 rounded-lg bg-glass mt-2 outline-transparent"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        <Link
          href="/forget"
          className=" lg:text-sm md:text-xs opacity-80 mt-3 hover:opacity-40 duration-200"
        >
          Forget Password
        </Link>

        <Button style="w-full bg-primary flex justify-center font-semibold rounded-lg px-4 py-3 mt-9">
          Log in
        </Button>
      </div>
    </section>
  );
};

export default Page;
