import React from "react";
import SocialMediaButton from "./SocialMediaButton";

const SocialMedia = () => {
  return (
    <div className=" 3xl:mt-6 mt-1 flex flex-col p-2 md:mt-2 md:p-3 2xl:mt-5 ">
      <div className="flex w-full">
        <SocialMediaButton
          link="https://www.facebook.com/"
          style="4xl:w-[45px] 4xl:h-[45px] 2xl:w-[24px] 2xl:h-[24px] md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
          image="/images/socialmedia/facebook.png"
        />
        <SocialMediaButton
          link="https://x.com/"
          style="4xl:w-[45px] 4xl:h-[45px] 2xl:w-[24px] 2xl:h-[24px] md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
          image="/images/socialmedia/twitter.png"
        />
        <SocialMediaButton
          link="https://www.linkedin.com/"
          style="4xl:w-[45px] 4xl:h-[45px] 2xl:w-[24px] 2xl:h-[24px] md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
          image="/images/socialmedia/linkedin.png"
        />
        <SocialMediaButton
          link="https://www.instagram.com/"
          style="4xl:w-[45px] 4xl:h-[45px] 2xl:w-[24px] 2xl:h-[24px] md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
          image="/images/socialmedia/instagram.png"
        />
        <SocialMediaButton
          link="https://www.tiktok.com/"
          style="4xl:w-[45px] 4xl:h-[45px] 2xl:w-[24px] 2xl:h-[24px] md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
          image="/images/socialmedia/tiktok.png"
        />
        <SocialMediaButton
          link="https://github.com/"
          style="4xl:w-[45px] 4xl:h-[45px] 2xl:w-[24px] 2xl:h-[24px] md:w-[18px] md:h-[18px] w-[17px] h-[17px] cursor-pointer"
          image="/images/socialmedia/github.png"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
