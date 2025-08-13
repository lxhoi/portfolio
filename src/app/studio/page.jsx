"use client";
import "./studio.css";
import { useRef } from "react";

import Copy from "@/components/Copy/Copy";
import BtnLink from "@/components/BtnLink/BtnLink";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import ProcessCards from "@/components/ProcessCards/ProcessCards";
import Footer from "@/components/Footer/Footer";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const page = () => {
  const studioRef = useRef(null);

  useGSAP(() => {
    if (!studioRef.current) return;

    const studioHeroH1 = studioRef.current.querySelector(".studio-hero h1");
    const studioHeroImgWrapper = studioRef.current.querySelector(
      ".studio-hero-img-wrapper"
    );
    const missionLinkWrapper = studioRef.current.querySelector(".mission-link");

    if (studioHeroH1) {
      const split = SplitText.create(studioHeroH1, {
        type: "chars",
        charsClass: "char++",
      });

      split.chars.forEach((char) => {
        const wrapper = document.createElement("span");
        wrapper.className = "char-mask";
        wrapper.style.overflow = "hidden";
        wrapper.style.display = "inline-block";
        char.parentNode.insertBefore(wrapper, char);
        wrapper.appendChild(char);
      });

      gsap.set(split.chars, { y: "100%" });

      gsap.to(split.chars, {
        y: "0%",
        duration: 0.8,
        stagger: 0.2,
        delay: 0.85,
        ease: "power3.out",
      });
    }

    if (studioHeroImgWrapper) {
      gsap.set(studioHeroImgWrapper, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });

      gsap.to(studioHeroImgWrapper, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });
    }

    if (missionLinkWrapper) {
      gsap.set(missionLinkWrapper, { y: 30, opacity: 0 });

      ScrollTrigger.create({
        trigger: missionLinkWrapper.closest(".mission-intro-copy"),
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(missionLinkWrapper, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.2,
            ease: "power3.out",
          });
        },
      });
    }
  });

  return (

    <>
      <div className="studio" ref={studioRef}>
        <section className="studio-hero">
          <img src="/icon.png" alt="HOIBRANDS Icon" style={{ height: 80, marginBottom: 16 }} />
          <h1 className="caps">LXH </h1>
        </section>

        <section className="studio-hero-img">
          <div className="studio-hero-img-wrapper">
            <img src="/images/studio/hero.png" alt="" />
          </div>
        </section>

        <section className="studio-header">
          <div className="studio-header-copy">
            <Copy>
              <h2>
                My strongest expertise is in brand identity design and graphic design, 
                followed by UI design and motion design. 
                I am proficient in English and AI to support my work.
                I solve problems flexibly and deliver work with precision and polish.
              </h2>
            </Copy>
          </div>
        </section>

        <WhoWeAre />

        <section className="mission-intro">
          <div className="mission-intro-col-sm"></div>
          <div className="mission-intro-col-lg">
            <div className="mission-intro-copy">
              <Copy>
                <h3>
                  My name is Hoi Le - founder of HOIBRANDS studio.
                  I am a graphic designer with over 5 years of experience working with clients. 
                  I can create brand identity systems, printed and digital materials, website designs, and motion graphics. 
                </h3>
                <br />
                <h3>
                  My strengths include strong English skills 
                  and proficiency in using AI tools to enhance my professional work.
                </h3>
              </Copy>

              <div className="mission-link">
                <BtnLink route="/work" label="View Work" dark />
              </div>
            </div>
          </div>
        </section>

        <ProcessCards />

        <section className="recognition">
          <div className="recognition-copy">
            <Copy>
              <p className="sm caps">(Recognition)</p>
              <br />
              <h2>
                Completed over 300+ brand identity projects for clients in various industries. 
                Served as an AI design advisor for major companies. 
                Created a wide range of impactful products and design assets used by brands in Vietnam and abroad.
              </h2>
            </Copy>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;
