import React from "react";
import img from "../../../assets/image/image.png";
import img1 from "../../../assets/image/image2.png";

const SocialLogin = () => {
  return (
    <div className="social-login">
      <button className="social-button">
        <img src={img} alt="google" className="social-icon" />
        Google
      </button>
      <button className="social-button">
        <img src={img1} alt="apple" className="social-icon" />
        Apple
      </button>
    </div>
  );
};
export default SocialLogin;
