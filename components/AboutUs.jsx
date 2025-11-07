const AboutUs = () => {
  return (
    <section className="container margin-section-lg flex justify-between">
      {/* -------------------AboutUs Section Left------------------ */}
      <div className="flex-1 space-y-5">
        <p className="text-tertiary">/ ABOUT US</p>
        <h3 className="text-5xl">We build powerful, forward-thinking digital solutions.</h3>
      </div>
      {/* -------------------AboutUs Section Right----------------- */}
      <div className="flex-1 space-y-16">
        <div className="space-y-4">
          <p className="text-lg">We are a top-rated software agency dedicated to crafting innovative, high-performance digital solutions that empower businesses to scale, streamline operations, and stay ahead in a competitive market. Our expert team combines creativity, <span className="text-tertiary">technology, and strategy to deliver results that truly make an impact.</span></p>
          <p className="text-tertiary text-lg">What started as a small idea to help local businesses stand out has grown into a full-scale outdoor advertising platform. Over the years, we’ve partnered with companies of all sizes delivering impactful campaigns on billboards.</p>
        </div>
        {/* -------------------Statics Container------------------- */}
        <div className="flex justify-between text-lg">
          <div className="space-y-5">
            <h3 className="font-semibold text-5xl text-center">100 +</h3>
            <p className="italic">Build live website</p>
          </div>
          <div className="border-x border-secondary space-y-5 px-10">
            <h3 className="font-semibold text-5xl text-center">50 +</h3>
            <p className="italic">clients worldwide</p>
          </div>
          <div className="space-y-5">
            <h3 className="font-semibold text-5xl text-center">05 +</h3>
            <p className="italic">Years Of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;