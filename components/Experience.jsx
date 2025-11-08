import Image from "next/image";
import banner from '@/public/Others/banner.png'
import profile from '@/public/Others/profile.png'
import semiclone from '@/public/Others/Group 1321314548.png'

const Experience = () => {
  return (
    <section className="container margin-section-lg">
      {/* -----------------Section Container-------------------- */}
      <div className="flex">
        {/* ------------------Section Left Side----------------- */}
        <div className="flex-1">
          <Image src={banner} alt=""></Image>
        </div>
        {/* ------------------Section Right Side---------------- */}
        <div className="flex-1">
          <h3 className="text-5xl">Empowering businesses, Redefining experiences.</h3>
          <div>
            <p>What started as a small idea to help local businesses stand out has grown into a full-scale outdoor advertising platform. Over the years, we’ve partnered with companies of all sizes delivering impactful campaigns on billboards.</p>
            <p>From apps to websites, we deliver seamless, high-impact designs that redefine user experience. Let’s build something extraordinary together!</p>
          </div>
          <div>
            <h3>“Details are kind to your body and pleasant to look at. The dentist's skill and compassion were evident. Also, there’s a tilt and height-adjusting mechanism.” </h3>
            <hr className="border-secondary" />
            <div>
              <div>
                <Image src={profile} alt="profile"></Image>
                <div>
                  <h4>Cecilia Payne</h4>
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