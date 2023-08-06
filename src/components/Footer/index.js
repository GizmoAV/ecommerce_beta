import React from "react";
import "../Footer/footer.css";
import { SOCIAL_IMGF, SOCIAL_IMGI, SOCIAL_IMGL } from "../../constant";

const Footer = () => {
  return (
    <>
      <div className="footer-section-area">
        <div className="footer-ele">
          <div className="company footer-clm-hdr">Company</div>
          <div className="footer-clm-ele">About Us</div>
          <div className="footer-clm-ele">News</div>
          <div className="footer-clm-ele">FAQ</div>
        </div>
        <div className="footer-ele">
          <div className="products footer-clm-hdr">Products</div>
          <div className="footer-clm-ele">Hardware</div>
          <div className="footer-clm-ele">Software</div>
        </div>
        <div className="footer-ele">
          <div className="solutions footer-clm-hdr">Solutions</div>
          <div className="footer-clm-ele">Business</div>
          <div className="footer-clm-ele">Higher Education</div>
        </div>
        <div className="footer-ele">
          <div className="support footer-clm-hdr">Support</div>
          <div className="footer-clm-ele">Case Study</div>
          <div className="footer-clm-ele">Download Center</div>
        </div>
        <div className="footer-ele">
          <div className="contact footer-clm-hdr">Contact</div>
          <div className="footer-clm-ele">Tel: +977-9810328552</div>
          <div className="footer-clm-ele">Email: info@gizmoav.com.np</div>
        </div>
        <div className="footer-ele">
          <div className="follow-us footer-clm-hdr">Please follow us</div>
          <div className="popular-post">
            <a href={"https://www.linkedin.com/company/gizmoav/"}>
              <img
                alt=""
                className="icon"
                src={SOCIAL_IMGL}
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100080259594143">
              <img
                alt=""
                className="icon"
                src={SOCIAL_IMGF}
              />
            </a>
            <a href="https://www.instagram.com/gizmoav_nepal/">
              <img
                alt=""
                className="icon"
                src={SOCIAL_IMGI}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
          <span><p> © 2023 www.gizmoav.com.np | all rights reserved.</p></span>
      </div>
    </>
  );
};

export default Footer;
