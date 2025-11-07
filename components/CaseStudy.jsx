import SectionHeading from "@/ui/SectionHeading";

const CaseStudy = () => {

  const ceses = [
    {
      id: 1,
      banner: '/Sub_Banner/Rectangle 9498.png',
      title: 'EchoMetric',
      description: 'Carrying out research to identify and understand challenges for effective problem-solving. We understand that every brand .'
    },
    {
      id: 2,
      banner: '/Sub_Banner/Group 2147223739.png',
      title: 'Perfect Billboard',
      description: 'Carrying out research to identify and understand challenges for effective problem-solving. We understand that every brand .'
    },
    {
      id: 3,
      banner: '/Sub_Banner/Rectangle 9498 (1).png',
      title: 'Pothole Doctors',
      description: 'Carrying out research to identify and understand challenges for effective problem-solving. We understand that every brand.'
    },
  ]

  return (
    <section className="margin-section-lg">

      {/* --------------------Section-Heading------------------- */}
      <SectionHeading
        className='text-black'
        subtitle="/ CASE STUDY"
        title=<>The work we did, we've <br /> helped to grow</>
      ></SectionHeading>

      {/* -------------------Section-Container------------------ */}
      <div className="container flex justify-between items-center gap-10 mt-10">
        {ceses.map((caseItem) => (
          /* -------------------CaseStudy Card------------------- */
          <div key={caseItem?.id}>
            <img width={100} height={100} className="w-full" src={caseItem?.banner} alt={caseItem?.title} />
            <h3 className="font-semibold text-2xl text-black mt-5">{caseItem?.title}</h3>
            <p className="text-tertiary mt-2">{caseItem?.description}</p>
          </div>
        ))}
      </div>
    
    </section>
  );
};

export default CaseStudy;