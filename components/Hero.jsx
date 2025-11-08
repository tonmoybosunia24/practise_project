import NavBar from "./NavBar";
import banner from '@/public/Banner/banner.png';

const Hero = () => {
  return (
    <header className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between text-white" style={{ backgroundImage: `url(${banner.src})` }}>

      {/* ---------------------NavBar------------------- */}
      <NavBar></NavBar>
      {/* -----------------Hero-Content----------------- */}
      <div className="container mb-[52px]">
        <p className="w-fit text-[13px] uppercase tracking-wider font-medium px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
          Check out the our services
        </p>
        <h3 className="text-[70px] pt-5 pb-6 text-hero-gradient bg-clip-text text-transparent leading-tight">
          We Build <br />
          Products That <br />
          Empower Growth
        </h3>
        <p className="text-[18px] text-[#F8F8FF]">Empower teams with smart engagement tools and insights <br /> anytime anywhere.</p>
      </div>

    </header>
  );
};

export default Hero;