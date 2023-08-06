import React from "react";
import "./style.css";

const BusinessMessages = () => {

  const ourMissionAndVision =
    "Mission and Vision : At Gizmo AV Solutions, our mission is to be the premier provider of IT infrastructure solutions, delivering cutting-edge peripherals to diverse industries. We aim to empower Retail, Education, Corporate, Health, BFSI, and NGO/INGO sectors with our top-of-the-line technology. Our comprehensive product range encompasses laptops, desktops, servers, audio visual equipment, gaming peripherals, smart TVs, interactive displays, video walls, mobile devices, and networking gear. Additionally, we are committed to providing customized software solutions and ensuring cost-effectiveness for our valued customers";

  const whatWeDo =
    "We specialize in delivering top-notch Products Like Laptop/ Desktop/ Network & Switches/ CCTV/ Severs/ Accessories (Keyboard/Mouse) Audio/ Visuals/ Conference Solutions, Smart Classroom Automations and so on which meet with Complete IT Infrastructure Solution required for a company. Services Offered: 1. Project 2. Integration 3.Enterprise Networks 4. Client Comuputing 5. One Stop Shop 6. Technical Support & Others";

  const whyChooseUs = "Unparalleled Quality: We deliver the highest quality of Goods And Services with globally recognized products & Certified Engineers. Customer Satisfaction: Your satisfaction is our priority. We closely collaborate with you to understand your needs, aligning our solutions with your expectations for a successful outcome. Competitive Pricing: We offer top-quality solutions at competitive prices. Our pricing structure provides excellent value for your investment, making our services accessible to businesses of all sizes. Services: We provide unparalleled Services Connecting the future of Communication all over Nepal. Our advanced technology ensures 360 presence with seamless service in terms of warranty, repair and support throughout the country by enhancing matching the needs";
  return (
    <>
      <div className="constFlexCol">
        <div className="para_hdr">Our Mission and Vison</div>
        <div className="para_bdy">
          <p>{ourMissionAndVision}</p>
        </div>
        <div className="para_hdr">What We Do?</div>
        <div className="para_bdy">
          <p>{whatWeDo}</p>
        </div>
        <div className="para_hdr">Why Choose Us?</div>
        <div className="para_bdy">
          <p>{whyChooseUs}</p>
        </div>
      </div>
    </>
  );
};
export default BusinessMessages;

/**
 * # future purpose code #
 *   const [showMore, setShowMore] = useState(false);

     const handleShowMoreClick = () => 
    {
     setShowMore(!showMore);
    };
    =================
 *  {showMore ? (
            <p>
              {ourMissionAndVision}{" "}
              <b onClick={handleShowMoreClick} className="show_more">
                {"<<<Show Less"}
              </b>
            </p>
          ) : (
            <p>
              {`${ourMissionAndVision.slice(0, 700)}...`}{" "}
              <b onClick={handleShowMoreClick} className="show_more">
                {"Show More>>>"}
              </b>
            </p>
          )} 
          
*/
