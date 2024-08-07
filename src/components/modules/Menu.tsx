import SectionHeaders from "@/elements/SectionHeaders.tsx";
import Image from "next/image";
import Card from "./Card";

const Menu = () => {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={"/sallad1.png"} width={109} height={189} alt="sallad" />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={"/sallad2.png"} alt="sallad2" width={107} height={195} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader={"check out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Menu;
