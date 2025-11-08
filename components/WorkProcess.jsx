import SectionHeading from "@/ui/SectionHeading";

const WorkProcess = () => {

  const works = [
    {
      id: 1,
      title: 'Roadmap & Discovery',
      description: 'Research market, identify opportunities and plan the product journey.'
    },
    {
      id: 2,
      title: 'Analysis & Architecture Design',
      description: 'Define project requirements, create a robust system architecture and lay the foundation for development.'
    },
    {
      id: 3,
      title: 'Design Kickoff',
      description: 'Transform concepts into user-friendly, visually appealing interfaces and experiences.'
    },
    {
      id: 4,
      title: 'Development',
      description: 'Build the software, following coding standards and agile methodologies.'
    },
    {
      id: 5,
      title: 'Quality Assurance',
      description: 'Thoroughly test the product for functionality, performance and security.'
    },
    {
      id: 6,
      title: 'Launch & Monitoring',
      description: 'Deploy the product, promote it and continuously monitor its performance and user feedback.'
    }
  ]

  return (
    <section className="py-[100px]  bg-[linear-gradient(to_right_top,#141452,#0c1341,#0a1030,#080a1e,#010209)]">

      {/* ----------------Section Heading------------------ */}
      <SectionHeading subtitle="/ WORK PROCESS" title=<>Your path to product <br />
        success starts here</>></SectionHeading>

      {/* -----------------Section Container---------------- */}
      <div className="px-5 md:px-9 lg:px-[189px] mx-auto w-full max-w-[1440px] text-white">
        {works.map((work, index) => (

          /* -------------------WorkProcess ----------------- */
          <div key={work?.id} className={`flex justify-between items-center gap-10 ${index !== works.length - 1 ? 'border-b border-tertiary' : ''} py-6 pb-10`}>
            <div className="flex-1 space-y-2">
              <p className="w-fit border border-rounded border-gray-300 rounded-full text-[18px] px-[18px] py-2">Step {work?.id}</p>
              <h2 className="text-2xl">{work?.title}</h2>
            </div>
            <p className="flex-1 text-xl">{work?.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default WorkProcess;