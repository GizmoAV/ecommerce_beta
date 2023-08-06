import React from "react";
import BusinessMessages from "./BusinessMessages";
import BusinessSoln from "./businessSoln";

const BusinessSection = () =>{
    return(
        <>
        <div  className="main_container">
            <BusinessMessages />
            {/* <BusinessSoln /> */}
        </div>
        </>
    );
};

export default BusinessSection;