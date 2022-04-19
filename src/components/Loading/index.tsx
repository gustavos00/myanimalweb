import Lottie from "react-lottie";
import animationData from "../../assets/animations/loading.json";
import Filter from "../Filter";

function Loading() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Filter>
      <Lottie options={options} width={100} height={100} />
    </Filter>
  );
}

export default Loading;
