import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <ThreeDots
        color="#d83434"
        ariaLabel="three-dots-loading"
        visible={true}
        wrapperStyle={{ margin: "auto" }}
        height={45}
      />
    </div>
  );
};

export default Loader;
