import Image from "next/image";

const MenuItems = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black/25 transition-all">
      <div className="text-center"></div>
      <Image
        src={"/pizza.png"}
        alt="pizza"
        width={96}
        height={96}
        className="block mx-auto"
      />
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        It&apos;s a classic combination of tomato sauce, cheese, and pepperoni
        that has been around for decades.
      </p>
      <button className="bg-primary text-white rounded-full px-6 py-2">
        Add to cart
      </button>
    </div>
  );
};

export default MenuItems;
