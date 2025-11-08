import { LuCalendarClock } from "react-icons/lu";

const Idea = () => {
  return (
    <section className="bg-black">
      {/* ------------------Section Container---------------- */}
      <div className="container margin-section-lg flex flex-col justify-center items-center gap-5 text-center text-white">

        <h3 className="text-5xl">Have a World Changing Idea? <br /> Say it BlackDevs</h3>
        <p className="text-tertiary">We’re a top-rated agency dedicated to crafting innovative software <br /> solutions that transform ideas into powerful digital products.</p>
        <button className='flex items-center gap-2 button'><LuCalendarClock /> Book A Call</button>

      </div>

    </section>
  );
};

export default Idea;