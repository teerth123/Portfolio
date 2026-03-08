export default function VercelScroll() {
  return (
    <>
      <div className="fixed h-[48%] top-0 left-0 w-screen z-10 bg-[#a2a2a2]/40"></div>
      <div className="fixed h-[48%] bottom-0 left-0 w-screen z-10 bg-[#a2a2a2]/40"></div>


      <div className="h-screen w-screen flex justify-center items-center gap-10 ">
        <div className="flex justify-center items-center gap-10 h-screen">
          <div className="h-30 w-screen fixed z-0 top-[48%] left-[40%]">
            <h1 className="text-4xl font-bold">Vercel</h1>
          </div>
          <div className="absolute z-0 h-screen mt-[50%]">
            <h1 className="text-4xl font-bold">Scroll</h1>
            <h1 className="text-4xl font-bold">Push</h1>
            <h1 className="text-4xl font-bold">Done</h1>
            <h1 className="text-4xl font-bold">Quit</h1>
            <h1 className="text-4xl font-bold">Continue</h1>
          </div>
        </div>
      </div>
    </>
  );
}
