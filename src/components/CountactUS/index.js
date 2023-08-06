import React from "react";
import "./style.css";
const CountactUS = () => {
  return (
    <div>
      <div className="contact_us">
        <form action="" className="contact_form">
          <div className="legend">Send Us A Message</div>
          <div>
            <input type="text" id="fname" name="fname" placeholder="Name*" />
          </div>
          <div>
            <input
              type="email"
              id="lname"
              name="lname"
              placeholder="Email Id*"
            />
          </div>
          <div>
            <input
              type="number"
              id="phonenumber"
              name="phonenumber"
              placeholder="Phone Number*"
            />
          </div>
          <div>
            <select name="cars" id="cars">
              <option value="volvo">Choose Your Role</option>
              <option value="saab">End User</option>
              <option value="opel">Reseller</option>
            </select>
          </div>
          <div>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="conatct_btn">
            <button>SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountactUS;
