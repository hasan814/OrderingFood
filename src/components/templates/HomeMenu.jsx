import SectionHeaders from "@/elements/SectionHeaders";
import MenuItems from "@/modules/MenuItems";
import Image from "next/image";

const HomeMenu = () => {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={"/sallad1.png"} alt="pizza" width={109} height={189} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={"/sallad2.png"} alt="pizza" width={107} height={195} />
        </div>
      </div>
      <SectionHeaders subHeader={"CHECK OUT"} mainHeader={"Menu"} />
      <div className="grid grid-cols-3 gap-4">
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
      </div>
    </section>
  );
};

export default HomeMenu;
