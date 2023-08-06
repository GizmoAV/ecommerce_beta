import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./overrideStyle.css";
import { CRSL_IMG1, CRSL_IMG2, CRSL_IMG3, CRSL_IMG4, CRSL_IMG5 } from "../../constant";

const BannerCarousel = () => {
  return (
    <Carousel
      autoPlay="true"
      interval="5000"
      infiniteLoop="true"
      showThumbs="false"
      transitionTime="100"
      axis="horizontal"
      thumbWidth="0"
      className="cust_carousel"
    >
      <div className="slideImage">
        <img src={CRSL_IMG1} alt="b1" />
        {/* <p> Hello Gizmo</p> */}
      </div>
      <div className="slideImage">
        <img src={CRSL_IMG2} alt="b1" />
      </div>
      <div className="slideImage">
        <img src={CRSL_IMG3} alt="b1" />
      </div>
      <div className="slideImage">
        <img src={CRSL_IMG4} alt="b1" />
      </div>
      <div className="slideImage">
        <img src={CRSL_IMG5} alt="b1" />
      </div>
    </Carousel>
  );
};
export default BannerCarousel;
