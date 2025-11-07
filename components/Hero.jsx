import NavBar from "./NavBar";
import banner from '@/public/Banner/banner.png';

const Hero = () => {
  return (
    <header className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between text-white" style={{ backgroundImage: `url(${banner.src})` }}>

      {/* ---------------------NavBar------------------- */}
      <NavBar></NavBar>
      {/* -----------------Hero-Content----------------- */}
      <div className="container mb-20 space-y-5">
        <p className="w-fit text-lg border border-blue-300 rounded-full px-3 py-1">Check out the our services</p>
        <h3 className="text-7xl text-hero-gradient bg-clip-text text-transparent">
          We Build <br />
          Products That <br />
          Empower Growth
        </h3>
        <p className="text-xl text-secondary">Empower teams with smart engagement tools and insights <br /> anytime anywhere.</p>
      </div>

    </header>
  );
};

export default Hero;