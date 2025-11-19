import MainBanner from "../../components/MainBanner/index.jsx";
import Icon from "../../components/Icon/index.jsx";

function Homepage() {
  return (
    <>
      <MainBanner title="titre" subtitle="soustitre" />
      <Icon iconType="cash" strokeColor="green" title="money" subtitle="toto" />
    </>
  );
}

export default Homepage;
