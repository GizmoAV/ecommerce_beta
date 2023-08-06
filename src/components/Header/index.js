import React from "react";
import "./styles.css";
import { LOGO_GIZMOAV } from "../../constant";

const Header = () => {
  // const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // const toggleHamburger = () => {
  //   setHamburgerOpen(!hamburgerOpen);
  // };
  return (
    <>
      <div className="constFlexRow header justifyContentCtr alignItemCntr">
        <div className="constFlexRow alignItemCntr menuContainer">
          <div className="flexAutoRow">
            <a href="/">
              <img className="iqLogo" alt="iqLogo" src={LOGO_GIZMOAV} />
            </a>
          </div>
          <div className="headerwidth0" >
            <nav className='constFlexRow'>
              <ul className="constFlexRow ulMenu justifyContentEnd">
                <li className="flexInline listMenu">
                  <span className="constFlexRow listAnchorSpan paddingRange16 alignItemCntr justifyContentCtr ">
                    Solutions
                    {/* <div className="constFlexCol drpDwnMnu">
                      <small>ABC</small>

                      <small>XYZ</small>

                      <small>TPL</small>
                    </div> */}
                  </span>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="constFlexRow listAnchor paddingRange16 alignItemCntr justifyContentCtr"
                    href="/product"
                  >
                    Product
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="constFlexRow listAnchor paddingRange16 alignItemCntr justifyContentCtr"
                    href="/software"
                  >
                    Software
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="constFlexRow listAnchor paddingRange16 alignItemCntr justifyContentCtr"
                    href="/support"
                  >
                    Support
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="constFlexRow listAnchor paddingRange16 alignItemCntr justifyContentCtr"
                    href="/aboutus"
                  >
                    About Us
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="constFlexRow listAnchor paddingRange16 alignItemCntr justifyContentCtr"
                    href="/constactus"
                  >
                    Constact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
