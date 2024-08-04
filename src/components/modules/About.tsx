import SectionHeaders from "@/elements/SectionHeaders.tsx";

const About = () => {
  return (
    <section className="text-center my-16">
      <SectionHeaders subHeader={"our story"} mainHeader={"About us"} />
      <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eum
          libero accusamus mollitia nihil voluptas ea, ullam nesciunt iusto
          minus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          excepturi in porro possimus quasi libero itaque sed. Debitis,
          expedita. Numquam!
        </p>
      </div>
    </section>
  );
};

export default About;
