export default function EditorLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative md:overflow-visible overflow-hidden">
      <div className="gradiant !-z-50 lg:top-[0px] md:top-[30px] top-[80px] center lg:w-[700px] md:w-[500px] w-[250px] lg:h-[700px] md:h-[500px] h-[250px] bg-[#6016fc]"></div>
      <div className="gradiant lg:top-[100px] lg:left-[250px] top-[200px] left-[0px] lg:w-[700px] md:w-[500px] w-[250px] lg:h-[700px] md:h-[500px] h-[250px] bg-[#16fcd2]"></div>
      <div className="gradiant lg:top-[100px] lg:left-[350px] lg:right-0 top-[200px] right-[0px] lg:w-[700px] md:w-[500px] w-[250px] lg:h-[700px] md:h-[500px] h-[250px] bg-[#fca016]"></div>

      {children}
    </main>
  );
}
