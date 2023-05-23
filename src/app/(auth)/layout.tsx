export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main className=" relative w-full md:h-[75vh] sm:h-[90vh] h-screen sm:w-[400px] lg:w-[700px] flex items-center justify-center mx-auto md:overflow-visible overflow-hidden">
          <div className="gradiant !-z-50 lg:top-[5px] md:top-[30px] top-[80px] center lg:w-[700px] md:w-[500px] w-[250px] lg:h-[700px] md:h-[500px] h-[250px] bg-[#6016fc]"></div>
      <div className="gradiant lg:top-[250px] lg:left-[350px] top-[200px] left-[0px] lg:w-[700px] md:w-[500px] w-[250px] lg:h-[700px] md:h-[500px] h-[250px] bg-[#16fcd2]"></div>
      <div className="gradiant lg:top-[250px] lg:left-[-350px] lg:right-0 top-[200px] right-[0px] lg:w-[700px] md:w-[500px] w-[250px] lg:h-[700px] md:h-[500px] h-[250px] bg-[#fca016]"></div>
   
        {children}
      </main>
    );
  }