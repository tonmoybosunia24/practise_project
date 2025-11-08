import { LuCalendarClock } from "react-icons/lu";

const Idea = () => {
  return (
    <section className="bg-black">
      {/* ------------------Section Container---------------- */}
      <div className="container py-[100px] flex flex-col justify-center items-center text-center text-white">

        <h3 className="text-5xl">Have a World Changing Idea? <br /> Say it BlackDevs</h3>
        <p className="text-tertiary text-[18px] mt-[15px]">We’re a top-rated agency dedicated to crafting innovative software <br /> solutions that transform ideas into powerful digital products.</p>
        <button className='flex items-center gap-2 button mt-8'><LuCalendarClock /> Book A Call</button>

      </div>

    </section>
  );
};

export default Idea;