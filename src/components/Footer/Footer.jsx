import React from "react";
import footerBanner from "../../assets/images/more/footer_banner.jpg";
import copyRightBanner from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
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
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8">
            <img
              className="h-20 mb-6"
              src={logo}
              alt="Espresso Emporium logo"
            />
            <h3 className="font-rancho text-4xl mb-6 font-bold">
              Espresso Emporium
            </h3>
            <p className="mb-6">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-8">
              <Link to="http://www.facebook.com/aroarko18" target="_blank">
                <FaFacebook className="w-8 h-8" />
              </Link>
              <Link to="/" target="_blank">
                <FaTwitter className="w-8 h-8" />
              </Link>
              <Link to="https://www.instagram.com/aroarko" target="_blank">
                <FaInstagram className="w-8 h-8" />
              </Link>
              <Link to="https://www.linkedin.com/in/aroarko/" target="_blank">
                <FaLinkedin className="w-8 h-8" />
              </Link>
            </div>

            {/* Get In Touch Section */}
            <div>
              <h3 className="font-rancho text-4xl font-bold mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="w-6 h-5" />
                  <p className="text-lg">+60 1-XXXX XXXX</p>
                </div>
                <div className="flex items-center space-x-4">
                  <MdEmail className="w-6 h-5" />
                  <p className="text-lg">info@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaLocationDot className="w-6 h-5" />
                  <p className="text-lg">
                    Taman Connaught, Cheras, Kuala Lumpur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-4xl font-rancho font-bold mb-6">
              Connect With Us
            </h3>
            <form onSubmit={handleMessage} className="space-y-4">
              <input
                className="w-full border h-12 p-4 rounded-lg"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="w-full border h-12 p-4 rounded-lg"
                type="email"
                name="email"
                placeholder="Email"
              />
              <textarea
                className="w-full border h-28 p-4 rounded-lg"
                name="message"
                placeholder="Message"
              ></textarea>
              <input
                className="btn font-rancho bg-[#D2B48C] text-lg font-normal border-black border-2 mt-4"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${copyRightBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <p>Copyright © Espresso Emporium ! All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
