"use client";

import Image from "next/image";
import bgFirst from "@/assets/images/bgfirst.png";


export default function Home() {
  return (
    <div className="text-secondary max-w-[640px] w-full h-full">
      <article className="wrapper relative w-full h-full">
        <Image
          className="vdobg img"
          src={bgFirst}
          alt="bg-front"
          style={{
            position: "fixed",
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
            src="videos/01.mp4"
            type="video/mp4"
          />
        </video>
      </article>

      {/* <div className="vdo_start" id="vdo_start" style={{ display: "block" }}>
        <video
          className="vdo-start"
          autoPlay
          muted
          playsInline
          id="bgstart"
        >
          <source
            src="https://ik.imagekit.io/yajs9avmf/2DV-Boprek-002222.mp4?updatedAt=1746782743364"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div> */}

      {/* <section className="culture-section" style={{ display: "block" }}>
        <h1>ភ្ញៀវកិត្តិយសជាទីគោរព</h1>
        <img src="/assets/images/line-name.png" alt="Line" width="100%" />

        <p className="zone">
          <span className="txtzone">តំបន់អង្គុយពិសាភោជនាអាហារពេលល្ងាច</span>
          <br />
          <img src="/assets/images/icon.png" alt="*" width={22} height={22} />
          <img src="/assets/images/icon.png" alt="*" width={22} height={22} />
        </p>
        <span className="btn btn-slider">
          <img
            className="zoom-in-out-box"
            src="/assets/images/btn-open.png"
            alt="button"
          />
        </span>
      </section> */}

      {/* <article className="display">
        <img
          className="vdobg img fadeIns"
          src="/assets/images/bg_detail.png"
          alt="bgdetail"
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: -1,
            objectFit: "cover",
          }}
        />
        <video
          className="vdobg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          id="bg-detail"
        >
          <source
            src="https://ik.imagekit.io/yajs9avmf/2DV-Boprek-003.mp4?updatedAt=1746693913452"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
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

    </div>
  );
}
