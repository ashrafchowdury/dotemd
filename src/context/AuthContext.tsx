"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import { account } from "@/config/appwriteConfig";
import { v4 as uuidv4 } from "uuid";

type UserDataType = {
  email?: string;
  name?: string;
  $id?: string;
};

type AuthContextType = {
  currentUser: UserDataType | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserDataType | null>>;
  isLoading: boolean;
  register: (email: string, password: string) => void;
  forget: (email: string) => void;
  githubAuth: () => void;
  logout: () => void;
  recoverAccount: (
    userId: string,
    secret: string,
    password: string,
    cPassword: string
  ) => void;
};

type ChildrenType = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => useContext(AuthContext)!;

const AuthContextProvider: React.FC<ChildrenType> = ({
  children,
}: ChildrenType) => {
  const [currentUser, setCurrentUser] = useState<UserDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // common error messages
  const userExist =
    "A user with the same email already exists in your project.";
  const invalidCredentials =
    "Invalid credentials. Please check the email and password.";
  const invalidPassword =
    "Invalid password: Password must be at least 8 characters";

  useEffect(() => {
    const getCurrentUser = async () => {
      const userAuth = await account.get();
      if (userAuth?.email) {
        setCurrentUser(userAuth);
      } else {
        setCurrentUser(null);
      }
    };
    getCurrentUser();
  }, []);

  const register = async (email: string, password: string) => {
    setIsLoading(true);
    if (email || password) {
      const name = email?.slice(0, email?.indexOf("@"));
      try {
        await account.create(uuidv4(), email, password, name);
        const userAuth = await account.get();
        setCurrentUser(userAuth);
        toast.success("SignUp successfully");
        router.push("/editor");
      } catch (err: any) {
        if (err.message == userExist) {
          try {
            await account.createEmailSession(email, password);
            const userAuth = await account.get();
            setCurrentUser(userAuth);
            toast.success("Loged In successfully");
            router.push("/editor");
          } catch (error: any) {
            if (error.message == invalidCredentials) {
              toast.error("Invalid password");
            }
          }
        } else if (err.message == invalidPassword) {
          toast.error("Password is too short");
        } else {
          toast.error("Something went wrong!");
        }
      }
    }
    setIsLoading(false);
  };

  const forget = async (email: string) => {
    setIsLoading(true);
    if (email) {
      try {
        await account.createRecovery(email, "http://localhost:3000/recover");
        toast.success("Check your inbox");
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
    setIsLoading(false);
  };

  const recoverAccount = async (
    userId: string,
    secret: string,
    password: string,
    cPassword: string
  ) => {
    setIsLoading(true);
    if (password === cPassword) {
      try {
        await account.updateRecovery(userId, secret, password, cPassword);
        toast.success("Added new password successfully");
        router.push("/login");
      } catch (error: any) {
        if (error.message == invalidPassword) {
          toast.error("Password is too short");
        } else {
          toast.error("Something went wrong!");
        }
      }
    } else {
      toast.error("Password dose not mached!");
    }
    setIsLoading(false);
  };

  const githubAuth = async () => {
    setIsLoading(true);
    try {
      account.createOAuth2Session("github");
      const data = await account.get();
      setCurrentUser?.(data);
      toast.success("Login successfully");
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setIsLoading(false);
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setCurrentUser?.(null);
      toast.success("Logout successfully 🤝");
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const value: AuthContextType = {
    currentUser,
    setCurrentUser,
    register,
    logout,
    githubAuth,
    isLoading,
    forget,
    recoverAccount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
