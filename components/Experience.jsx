import Image from "next/image";
import banner from '@/public/Others/banner.png'
import profile from '@/public/Others/profile.png'
import semiclone from '@/public/Others/Group 1321314548.png'

const Experience = () => {
  return (
    <section className="container margin-section-lg">
      {/* -----------------Section Container-------------------- */}
      <div className="flex items-center">
        {/* ------------------Section Left Side----------------- */}
        <div className="flex-1">
          <Image src={banner} alt=""></Image>
        </div>
        {/* ------------------Section Right Side---------------- */}
        <div className="flex-1 space-y-5">
          <h3 className="text-5xl">Empowering businesses, Redefining experiences.</h3>
          <div className="space-y-5">
            <p className="text-tertiary">What started as a small idea to help local businesses stand out has grown into a full-scale outdoor advertising platform. Over the years, we’ve partnered with companies of all sizes delivering impactful campaigns on billboards.</p>
            <p className="text-tertiary">From apps to websites, we deliver seamless, high-impact designs that redefine user experience. Let’s build something extraordinary together!</p>
          </div>
          <div className="space-y-5">
            <h3 className="font-semibold text-lg">“Details are kind to your body and pleasant to look at. The dentist's skill and compassion were evident. Also, there’s a tilt and height-adjusting mechanism.” </h3>
            <hr className="border-secondary" />
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <Image src={profile} alt="profile"></Image>
                <div className="space-y-1">
                  <h4 className="font-semibold text-xl">Cecilia Payne</h4>
                  <p>CEO of Airbnb</p>
                </div>
              </div>
              <div>
                <Image src={semiclone} alt="semiclone"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;