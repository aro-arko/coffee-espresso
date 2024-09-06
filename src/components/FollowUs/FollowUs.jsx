import React from "react";
import img1 from "../../assets/images/cups/Rectangle 9.png";
import img2 from "../../assets/images/cups/Rectangle 10.png";
import img3 from "../../assets/images/cups/Rectangle 11.png";
import img4 from "../../assets/images/cups/Rectangle 12.png";
import img5 from "../../assets/images/cups/Rectangle 13.png";
import img6 from "../../assets/images/cups/Rectangle 14.png";
import img7 from "../../assets/images/cups/Rectangle 15.png";
import img8 from "../../assets/images/cups/Rectangle 16.png";

const FollowUs = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="max-w-6xl mx-auto py-24">
      <div className="text-center space-y-4 mb-12">
        <h5>--- Follow Us Now ---</h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-rancho font-bold">
          Follow on Instagram
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Cup ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
