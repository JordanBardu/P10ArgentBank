import MainBanner from "../../components/MainBanner/index.jsx";
import Icon from "../../components/Icon/index.jsx";
import imgSrc from "../../assets/img/bank-tree.webp";
import icons from "./icons-content.js";

function Homepage() {
  return (
    <>
      <MainBanner imgSrc={imgSrc} />
      <section className="features">
        {icons.map((icon, index) => {
          return (
            <Icon
              key={index}
              iconType={icon.iconSrc}
              title={icon.title}
              text={icon.text}
            />
          );
        })}
      </section>
    </>
  );
}

export default Homepage;
