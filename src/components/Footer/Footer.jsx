import React from "react";
import footerBanner from "../../assets/images/more/footer_banner.jpg";
import logo from "../../assets/images/more/logo1.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";

const Footer = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Submitted",
      text: "This is just a simple message box",
      icon: "success",
    });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${footerBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: "800px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-6 pt-28">
          <div className="mb-8">
            <img className="h-20 mb-6" src={logo} alt="logo/error" />
            <h3 className="font-rancho text-4xl mb-8 font-bold">
              Espresso Emporium
            </h3>
            <p className="mb-8">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            {/* social media*/}
            <div className="flex mb-8">
              <Link to="http://www.facebook.com/aroarko18" target="_blank">
                <FaFacebook className="w-8 h-8 mr-4" />
              </Link>
              <Link target="_blank" to="/">
                <FaTwitter className="w-8 h-8 mr-4" />
              </Link>
              <Link to="https://www.instagram.com/aroarko" target="_blank">
                <FaInstagram className="w-8 h-8 mr-4" />
              </Link>

              <Link to="https://www.linkedin.com/in/aroarko/" target="_blank">
                <FaLinkedin className="w-8 h-8 mr-4" />
              </Link>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="font-rancho text-4xl font-bold mb-8">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex space-x-6  items-center">
                  <FaPhoneAlt className="w-6 h-5" />
                  <p className="text-lg">+60 1-XXXX XXXX</p>
                </div>
                <div className="flex space-x-6 items-center">
                  <MdEmail className="w-6 h-5" />
                  <p className="text-lg">info@gmail.com</p>
                </div>
                <div className="flex space-x-6 items-center">
                  <FaLocationDot className="w-6 h-5" />
                  <p className="text-lg">
                    Taman Connaught, Cheras, Kuala Lumpur
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-rancho font-bold mb-8">
              Connect With Us
            </h3>
            <form onSubmit={handleMessage} className="space-y-4">
              <input
                className="w-full border h-12 p-4 rounded-lg"
                type="text"
                name="name"
                placeholder="Name"
              />
              <br />
              <input
                className="w-full border h-12 p-4 rounded-lg"
                type="email"
                name="email"
                placeholder="Email"
              />
              <br />
              <textarea
                className="w-full border h-28 p-4 rounded-lg"
                name="message"
                placeholder="Message"
              ></textarea>

              {/* <br /> */}
              <input
                className="btn font-rancho bg-[#D2B48C] font-bold text-xl border-black border-2"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
