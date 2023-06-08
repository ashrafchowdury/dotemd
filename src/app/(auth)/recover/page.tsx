"use client";

import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";

const Recover = () => {
  const { recoverAccount, isLoading } = useAuth();
  const searchParams = useSearchParams();
  const userId: any = searchParams.get("userId");
  const secret: any = searchParams.get("secret");

  const handleUserRecovaryData = async (event: any) => {
    event.preventDefault();
    const password: string = event.target[0].value;
    const cPassword: string = event.target[1].value;

    recoverAccount(userId, secret, password, cPassword);
  };

  if (!userId && !secret) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h1 className=" lg:text-4xl md:text-3xl text-2xl font-bold text-center">
          404 Page Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="flex flex-col lg:flex-row justify-center items-start lg:space-x-9">
      <div className=" w-full lg:w-[300px] mb-10 lg:mb-0">
        <h1 className=" text-2xl md:text-3xl font-semibold mb-4">
          Recover your account
        </h1>
        <p className=" text-sm md:text-[16px]">
          Quickly add new password and get back your account.
        </p>
      </div>

      <div className="w-full sm:w-[400px]">
        <p className=" text-[16px] md:text-lg font-medium mb-6">
          Add new passowrd
        </p>

        <form onSubmit={handleUserRecovaryData} className="w-full">
          <label className=" font-medium">Enter new password</label>
          <input
            type="text"
            name="password"
            placeholder="Enter new Password"
            className="w-full px-4 py-3 text-sm md:text-[16px] rounded-lg bg-glass mt-2 mb-5"
            required
            disabled={isLoading}
            min={8}
          />

          <label className=" text-sm md:text-[16px] font-medium">
            Confirme password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Confirem Password"
            className="w-full px-4 py-3 rounded-lg bg-glass mt-2 outline-transparent"
            required
            disabled={isLoading}
            min={8}
          />

          <Button
            style="w-full bg-primary flex justify-center font-semibold rounded-lg px-4 py-3 mt-9"
            disable={isLoading}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Recover;
