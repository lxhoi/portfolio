"use client";
import "./sample-project.css";
import { useRef } from "react";

import Copy from "@/components/Copy/Copy";
import BtnLink from "@/components/BtnLink/BtnLink";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const sampleProjectRef = useRef(null);

  useGSAP(
    () => {
      const imagesContainer = sampleProjectRef.current.querySelector(
        ".sp-images-container"
      );
      const progressContainer = sampleProjectRef.current.querySelector(
        ".sp-images-scroll-progress-container"
      );
      const counter = sampleProjectRef.current.querySelector(
        "#sp-images-scroll-counter"
      );
      const bannerImg =
        sampleProjectRef.current.querySelector(".sp-banner-img");
      const btnLinkWrapper =
        sampleProjectRef.current.querySelector(".sp-link-wrapper");

      gsap.set(bannerImg, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });

      gsap.to(bannerImg, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        delay: 1,
        ease: "power4.out",
      });

      if (btnLinkWrapper) {
        gsap.set(btnLinkWrapper, { y: 30, opacity: 0 });

        ScrollTrigger.create({
          trigger: btnLinkWrapper.closest(".sp-copy-description"),
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(btnLinkWrapper, {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 1,
              ease: "power4.out",
            });
          },
        });
      }

      ScrollTrigger.create({
        trigger: imagesContainer,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = Math.round(self.progress * 100);
          counter.textContent = progress;

          const containerHeight = progressContainer.offsetHeight;

          const isMobile = window.innerWidth < 1000;
          const baseDistance = window.innerHeight + containerHeight;
          const mobileMultiplier = isMobile ? 1.25 : 1;
          const moveDistance = baseDistance * mobileMultiplier;

          gsap.to(progressContainer, {
            y: -self.progress * moveDistance,
            duration: 0.1,
            ease: "none",
          });
        },
      });

      gsap.set(progressContainer, {
        position: "fixed",
        top: "100vh",
        left: "1.5rem",
        right: "1.5rem",
        width: "calc(100% - 3rem)",
      });
    },
    { scope: sampleProjectRef }
  );

  return (
    <div className="sample-project" ref={sampleProjectRef}>
      <section className="sp-hero">
        <Copy delay={0.85}>
          <h1>2025 Logofolio</h1>
        </Copy>
      </section>

      <section className="sp-banner-img">
        <img src="/images/work/port25/port25_17.png" alt="" />
      </section>

      <section className="sp-copy">
        <div className="sp-info">
          <div className="sp-col sp-col-lg">
            <div className="sp-tags">
              <Copy>
                <p className="sm caps mono">Creative Direction</p>
                <p className="sm caps mono">Motion Design</p>
                <p className="sm caps mono">Visual Identity</p>
              </Copy>
            </div>
          </div>
          <div className="sp-col sp-col-sm">
            <div className="sp-year">
              <Copy delay={0.15}>
                <p className="sm caps mono">2025</p>
              </Copy>
            </div>

            <div className="client">
              <Copy delay={0.3}>
                <p className="sm caps mono">Self-Initiated</p>
              </Copy>
            </div>
          </div>
        </div>

        <div className="sp-copy-wrapper">
          <div className="sp-col-lg">
            <div className="sp-copy-title">
              <Copy>
                <h3>A Journey in Logos</h3>
              </Copy>
            </div>
          </div>
          <div className="sp-col-sm">
            <div className="sp-copy-description">
              <Copy>
                <p>
                  Logofolio 2025 is a curated collection of my branding and logo design work, 
                  showcasing how strategy and creativity come together to build memorable brand identities.
                </p>
              </Copy>

              <div className="sp-link">
                <div className="sp-link-wrapper">
                  <BtnLink route="/contact" label="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-images">
        <div className="sp-images-scroll-progress-container">
          <h1 id="sp-images-scroll-counter">0</h1>
          <h1>/100</h1>
        </div>
        <div className="sp-images-container">
          <div className="sp-img">
            <img src="/images/work/port25/port25_2.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_3.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_4.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_5.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_6.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_7.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_8.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_9.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_10.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_11.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_12.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_13.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_14.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_15.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/port25/port25_1.png" alt="" />
          </div>
        </div>
      </section>

      <section className="sp-next-project">
        <div className="sp-next-project-copy">
          <Copy>
            <p
              className="sm"
              style={{ cursor: "pointer" }}
              onClick={() => window.location.href = "/work"}
            >
              (More Projects)
            </p>
          </Copy>
          <div className="sp-next-project-names">
            <Copy>
              <h1
                style={{ cursor: "pointer" }}
                onClick={() => window.location.href = "/project/danhoa"}
              >
                Đan Hoa Productions
              </h1>
            </Copy>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
