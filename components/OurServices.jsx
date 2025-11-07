import SectionHeading from "@/ui/SectionHeading";
import Image from "next/image";

/* ---------------------Serviece Data--------------------- */
const services = [
  {
    id: 1,
    icon: "/Icons/service1.png",
    title: "Backend & API Development",
    description: "Developing strong server systems and APIs for secure, seamless applications."
  },
  {
    id: 2,
    icon: "/Icons/image 662.png",
    title: "Mobile App Development",
    description: "Designing innovative and user-friendly apps for Android and iOS."
  },
  {
    id: 3,
    icon: "/Icons/image 663.png",
    title: "UI/UX Design",
    description: "UI/UX Design makes digital products easy and enjoyable to use."
  },
  {
    id: 4,
    icon: "/Icons/image 664.png",
    title: "WordPress & Shopify",
    description: "WordPress is a flexible website builder, and Shopify is a user-friendly e-commerce platform."
  },
  {
    id: 5,
    icon: "/Icons/image 665.png",
    title: "Website Development",
    description: "Creating responsive, user-friendly websites that drive engagement and grow your online presence."
  },
  {
    id: 6,
    icon: "/Icons/image 666.png",
    title: "Development Consultancy",
    description: "Expert guidance to plan, manage, and implement sustainable development projects efficiently."
  }
]

const OurServices = () => {
  return (
    <section className="bg-black py-20">
      {/* -----------------Section-Heading--------------- */}
      <SectionHeading subtitle='/ WHAT WE DO' title=<>We Write Code That <br /> Understands Business</>></SectionHeading>
      {/* ----------------------Services----------------- */}
      <div className="container grid grid-cols-3 gap-5 pt-20">
        {services.map((service) => (
          /* ------------------Service Card--------------- */
          <div className="bg-quaternary rounded-xl space-y-5 p-5" key={service?.id}>
            <Image width={60} height={60} src={service?.icon} alt={service?.title} />
            <h3 className="font-medium text-2xl text-white">{service?.title}</h3>
            <p className="text-secondary">{service?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;