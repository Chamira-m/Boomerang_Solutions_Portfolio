"use client";

import { useEffect, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import Player from "@vimeo/player";

const Video = () => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      // Create the Vimeo player
      playerRef.current = new Player(iframeRef.current);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playerRef.current.play(); // Play video when in view
            } else {
              playerRef.current.pause(); // Pause video when out of view
            }
          });
        },
        { threshold: 0.5 },
      );

      observer.observe(iframeRef.current);

      return () => {
        if (iframeRef.current) {
          observer.unobserve(iframeRef.current);
        }
      };
    }
  }, []);

  return (
    <section className="relative z-10 py-3 md:py-5 lg:py-10">
      <div className="container">
        <SectionTitle
          title="Discover Our Expertise"
          paragraph="Watch our latest video to see how we leverage cutting-edge technology and innovative strategies to deliver exceptional results for our clients."
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
                <iframe
                  ref={iframeRef}
                  src="https://player.vimeo.com/video/1007168251?autoplay=0&muted=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
