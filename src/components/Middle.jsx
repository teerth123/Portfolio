import Projects from "./Projects";
import '../index.css'
import First from "./First";
import Second from "./Second";
import Third from "./Third";


export default function Middle() {
  return (
    <div className="">
      <div className="flex justify-between gap-8">
      <First/>
      <div className="flex flex-col gap-4">
        <Second/>  
        <Projects /> 
      </div>
      <Third/>
      </div>
    </div>
  );
}
