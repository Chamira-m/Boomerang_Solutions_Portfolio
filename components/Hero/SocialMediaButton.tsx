import Image from "next/image";
import React from "react";

interface SocialMediaButtonTypes {
  link: string; // Updated type to string to accommodate external URLs
  image: string;
  style: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonTypes> = ({
  link,
  image,
  style,
}) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Image
      className={style}
      src={image}
      alt="social media icon"
      onClick={handleClick}
      width={50} // Example: set a width
      height={50} // Example: set a height
      layout="intrinsic" // Optional: optimizes the image size
      priority={true} // Optional: loads the image as a priority for LCP
    />
  );
};

export default SocialMediaButton;
