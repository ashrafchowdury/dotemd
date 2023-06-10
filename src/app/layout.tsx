import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "@/context/AuthContext";
const notoFont = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Beautiful Markdown Files in Seconds",
  description:
    "The ultimate markdown file creation tool. Design stunning markdown files effortlessly with our intuitive editor. Save time, unleash creativity, and boost productivity. Get started now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${notoFont.className} xl:w-[1250px] lg:w-[1020px] md:w-[750px] sm:w-[550px] w-[95%] mx-auto`}
      >
        <div className="glass fixed -z-40 top-0 left-0 right-0 bottom-0"></div>
        <AuthContextProvider>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            toastOptions={{
              className: "toast",
              style: {
                background: "#0B0B22",
                color: "white",
                padding: "10px 18px",
              },
            }}
          />
          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
