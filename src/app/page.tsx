"use client";

import Image from "next/image";
import bgFirst from "@/assets/images/bgfirst.png";
import bgDetail from "@/assets/images/bg_detail.png";
import Icon from "@/components/ui/Icon";
import btnOpen from "@/assets/images/btn-open.png";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const searchParams = useSearchParams();
  const name = searchParams.get("name")?.replace(/-/g, " ") || "";

  // Section visibility
  const [showDisplay, setShowDisplay] = useState(false);
  const [showCulture, setShowCulture] = useState(true);
  const [showWrapper, setShowWrapper] = useState(true);
  const [showVdoStart, setShowVdoStart] = useState(false);

  // Audio controls
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Slideshow
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  // Video/audio refs
  const bgDetailRef = useRef<HTMLVideoElement>(null);
  const bgStartRef = useRef<HTMLVideoElement>(null);
  const songRef = useRef<HTMLAudioElement>(null);

  // Scroll lock
  useEffect(() => {
    if (!showDisplay) lockScroll();
    else unlockScroll();
    // Cleanup on unmount
    return () => unlockScroll();
    // eslint-disable-next-line
  }, [showDisplay]);

  function lockScroll() {
    document.body.style.overflow = "hidden";
  }
  function unlockScroll() {
    document.body.style.overflow = "";
  }

  const handleBtnSlider = () => {
    bgStartRef.current?.play();
    songRef.current?.play();
    setShowVdoStart(true);
    setShowCulture(false);
    setShowWrapper(false);
    setAudioPlaying(true);

    // Start detail video after 10 seconds
    setTimeout(() => {
      setShowDisplay(true);
      setShowVdoStart(false);
      unlockScroll();
      bgDetailRef.current?.play();
      startAutoSlide();
    }, 15000);
  };

  // Slideshow logic
  const sections = [/* ...your sections here... */];
  const goToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const total = sections.length;
    let newIndex = index;
    if (index < 0) newIndex = total - 1;
    if (index >= total) newIndex = 0;
    setCurrentIndex(newIndex);
    sliderRef.current.scrollTo({
      left: newIndex * window.innerWidth,
      behavior: "smooth",
    });
  };
  const startAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(() => {
      if (currentIndex < sections.length - 1) {
        goToSlide(currentIndex + 1);
      } else {
        if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
      }
    }, 4000);
  };

  // Pagination update on scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const onScroll = () => {
      const newIndex = Math.round(slider.scrollLeft / window.innerWidth);
      if (newIndex !== currentIndex) setCurrentIndex(newIndex);
    };
    slider.addEventListener("scroll", onScroll);
    return () => slider.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line
  }, [currentIndex]);

  // Audio controls
  const handleStopMp3 = () => {
    setAudioPlaying(false);
    songRef.current?.pause();
  };
  const handleStartMp3 = () => {
    setAudioPlaying(true);
    songRef.current?.play();
  };

  // txtscroll show/hide on scroll
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const content = contentRef.current;
    const txtscroll = document.getElementById("txtscroll");
    if (!content || !txtscroll) return;
    const onScroll = () => {
      if (content.scrollTop >= 200) {
        txtscroll.style.display = "none";
      } else {
        txtscroll.style.display = "block";
      }
    };
    content.addEventListener("scroll", onScroll);
    return () => content.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="text-secondary max-w-[520px] w-full h-full relative">
      {
        showWrapper && (
          <article className="wrapper relative w-full h-full">
            <Image
              className="vdobg img"
              src={bgFirst}
              alt="bg-front"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: -1,
                objectFit: "cover",
              }}
            />
            <video
              className="absolute object-cover w-full h-full top-0 left-0 z-10"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              id="bg-front"
            >
              <source
                src="https://ik.imagekit.io/yajs9avmf/2DV-Boprek-001_new.mp4?updatedAt=1746782385114"
                type="video/mp4"
              />
            </video>
          </article>
        )}


      {
        showCulture && (
          <section className="absolute bottom-10 z-10 flex items-center justify-center w-full" style={{ display: "block" }}>
            <h1 className="font-moul text-center text-xl mb-2">
              {
                name ? "សូមគោរពអញ្ជើញ" : "ភ្ញៀវកិត្តិយសជាទីគោរព"
              }
            </h1>
            {
              name && (
                <div className="bg-white mx-8 rounded-full border-primary border-2 p-3 shadow-lg mt-5 mb-4 text-center">
                  <span className="font-moul text-gray-600">{name}</span>
                </div>
              )
            }
            <div className="flex items-center justify-center">
              <Icon className="w-[400px] h-[25px]" />
            </div>
            <p className="text-center text-sm mb-4 mt-4">ពិសាភោជនាអាហារពេលល្ងាច</p>

            <div className="flex items-center justify-center mt-4">
              <Image
                onClick={handleBtnSlider}
                className="zoom-in-out-box"
                src={btnOpen}
                width={200}
                height={100}
                alt="button"
              />
            </div>
          </section>
        )}

      {/* <div className="wrapper relative w-full h-full">
        <video
          className="absolute object-cover w-full h-full top-0 left-0 z-10"
          autoPlay
          muted
          playsInline
          id="bgstart"
        >
          <source
            src="https://ik.imagekit.io/yajs9avmf/2DV-Boprek-002222.mp4?updatedAt=1746782743364"
            type="video/mp4"
          />
        </video>
      </div> */}

      {showDisplay && (
        <article className="display">
          <Image
            className="vdobg img"
            src={bgDetail}
            alt="bg-detail"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: -1,
              objectFit: "cover",
            }}
          />
          <video
            className="absolute object-cover w-full h-full top-0 left-0 z-10"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            ref={bgDetailRef}
            id="bg-detail"
          >
            <source src="https://ik.imagekit.io/yajs9avmf/2DV-Boprek-003.mp4?updatedAt=1746693913452" type="video/mp4" />
          </video>

        </article>
      )}

      {showVdoStart && (
        <div className="wrapper relative w-full h-full">
          <video
            className="absolute object-cover w-full h-full top-0 left-0 z-10"
            autoPlay
            muted
            playsInline
            ref={bgStartRef}
          >
            <source
              src="https://ik.imagekit.io/yajs9avmf/2DV-Boprek-002222.mp4?updatedAt=1746782743364"
              type="video/mp4"
            />
          </video>
        </div>
      )}



      {/* <article className="display">
        <Image
          className="vdobg img"
          src={bgDetail}
          alt="bg-detail"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: -1,
            objectFit: "cover",
          }}
        />
        <video
          className="absolute object-cover w-full h-full top-0 left-0 z-10"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://ik.imagekit.io/yajs9avmf/2DV-Boprek-003.mp4?updatedAt=1746693913452"
            type="video/mp4"
          />
        </video>
      </article> */}

      {/* <div className="pagination" id="pagination"></div>
      <section className="nav-footer">
        <div className="audio">
          <span id="stop" className="btn stop_mp3">
          </span>
          <span id="start" className="btn start_mp3">
          </span>
        </div>
      </section> */}


      {
        showDisplay && (
          <>
            <article className="display">
              <Image
                className="vdobg img"
                src={bgDetail}
                alt="bg-detail"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  objectFit: "cover",
                }}
              />
              <video
                className="absolute object-cover w-full h-full top-0 left-0 z-10"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                ref={bgDetailRef}
                id="bg-detail"
                onLoadedData={() => {
                  bgDetailRef.current?.play();
                }}
              >
                <source src="https://ik.imagekit.io/yajs9avmf/2DV-Boprek-003.mp4?updatedAt=1746693913452" type="video/mp4" />
              </video>


            </article>
            <section className="nav-footer absolute top-4 right-4 rounded-2xl z-10 bg-primary p-2 backdrop-blur-2xl">
              <div className="audio">
                {
                  !audioPlaying ?
                    <span
                      onClick={handleStartMp3}
                      className="btn start_mp3">
                      <svg className="w-[32px] h-[32px] text-secondary" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
                      </svg>
                    </span>
                    :
                    <span
                      onClick={handleStopMp3}
                      className="btn stop_mp3">
                      <svg className="w-[32px] h-[32px] text-secondary" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z" />
                        <path fillRule="evenodd"
                          d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z"
                          clipRule="evenodd" />
                        <path fillRule="evenodd"
                          d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z"
                          clipRule="evenodd" />
                      </svg>
                    </span>
                }
              </div>
            </section>
          </>
        )}
      <audio
        loop
        autoPlay
        ref={songRef}
      >
        <source src="https://ik.imagekit.io/d7x54tr1xu/music.mp3?updatedAt=1746600604302" type="audio/mp3" />
      </audio>
    </div>
  );
}
