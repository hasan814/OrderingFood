import SectionHeaders from "@/elements/SectionHeaders";

const About = () => {
  return (
    <section className="text-center my-16">
      <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
      <div className="max-w-md mx-auto text-gray-500 mt-4 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, rem
          accusantium. Libero alias minus quas ratione amet! Quam, obcaecati
          asperiores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, rem
          accusantium. Libero alias minus quas ratione amet! Quam, obcaecati
          asperiores.
        </p>
      </div>
    </section>
  );
};

export default About;
