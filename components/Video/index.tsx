"use client";

import { useRef, useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPlaying(true);
            if (iframeRef.current) {
              iframeRef.current.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*",
              );
            }
          } else {
            setIsPlaying(false);
            if (iframeRef.current) {
              iframeRef.current.contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*",
              );
            }
          }
        });
      },
      {
        threshold: 0.5, // Adjust to pause/play when 50% of the video section is in view
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
    <section className="relative z-10 py-3 md:py-5 lg:py-10" ref={videoRef}>
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
              <div className="relative aspect-[77/40] items-center justify-center">
                <iframe
                  ref={iframeRef}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5LrDIWkK_Bc?enablejsapi=1&autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
