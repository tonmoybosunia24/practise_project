import Image from "next/image";
import banner from '@/public/Others/banner.png'
import profile from '@/public/Others/profile.png'
import semiclone from '@/public/Others/Group 1321314548.png'

const Experience = () => {
  return (
    <section className="px-5 md:px-9 lg:pl-16 lg:pr-[135px] mx-auto w-full max-w-[1440px] my-40">
      {/* -----------------Section Container-------------------- */}
      <div className="flex items-center gap-16">
        {/* ------------------Section Left Side----------------- */}
        <div className="flex-1">
          <Image width={569} height={620} src={banner} alt=""></Image>
        </div>
        {/* ------------------Section Right Side---------------- */}
        <div className="flex-1">
          <h3 className="text-5xl">Empowering businesses, Redefining experiences.</h3>
          <div className="pt-5">
            <p className="text-tertiary text-[18px]">What started as a small idea to help local businesses stand out has grown into a full-scale outdoor advertising platform. Over the years, we’ve partnered with companies of all sizes delivering impactful campaigns on billboards.</p>
            <p className="text-tertiary text-[18px] pt-7">From apps to websites, we deliver seamless, high-impact designs that redefine user experience. Let’s build something extraordinary together!</p>
          </div>
          <div className="space-y-5">
            <h3 className="font-medium text-[20px] pt-5">“Details are kind to your body and pleasant to look at. The dentist's skill and compassion were evident. Also, there’s a tilt and height-adjusting mechanism.” </h3>
            <hr className="border-secondary" />
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <Image src={profile} alt="profile"></Image>
                <div className="space-y-2.5">
                  <h4 className="font-medium text-[18px]">Cecilia Payne</h4>
                  <p className="text-[14px]">CEO of Airbnb</p>
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