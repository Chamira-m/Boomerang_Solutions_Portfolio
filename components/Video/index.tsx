"use client";

import { useRef, useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPlaying(true);
            if (videoRef.current) {
              videoRef.current.play();
            }
          } else {
            setIsPlaying(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.5, // Adjust threshold as needed
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="relative z-10 py-3 md:py-5 lg:py-10">
      <div className="container">
        <SectionTitle
          title="Discover Our Expertise"
          paragraph="Watch our latest video to see how we leverage cutting-edge technology and innovative strategies to deliver exceptional results for our clients. Our team is dedicated to helping you achieve your goals with personalized solutions."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[16/9] items-center justify-center">
                <video
                  ref={videoRef}
                  width="100%"
                  controls
                  muted
                  preload="auto"
                  className="rounded-md"
                >
                  <source src="/video/Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
