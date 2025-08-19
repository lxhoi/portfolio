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
          <h1>Coiny Coffee & Tea</h1>
        </Copy>
      </section>

      <section className="sp-banner-img">
        <img src="/images/work/coiny/coiny_1.png" alt="" />
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
                <p className="sm caps mono">2022</p>
              </Copy>
            </div>

            <div className="client">
              <Copy delay={0.3}>
                <p className="sm caps mono">HOIBRANDS</p>
              </Copy>
            </div>
          </div>
        </div>

        <div className="sp-copy-wrapper">
          <div className="sp-col-lg">
            <div className="sp-copy-title">
              <Copy>
                <h3>Crafting the Flavor of Identity</h3>
              </Copy>
            </div>
          </div>
          <div className="sp-col-sm">
            <div className="sp-copy-description">
              <Copy>
                <p>
                  COINY is a coffee and tea brand brought 
                  to life with a fresh and modern visual identity.
                </p>
                <br />
                <p>
                  The branding was designed to capture the warmth of coffee culture 
                  and the refreshing spirit of tea, blending 
                  them into a cohesive identity that feels contemporary, inviting, and memorable.
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
            <img src="/images/work/coiny/coiny_2.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/coiny/coiny_3.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/coiny/coiny_1.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/coiny/coiny_4.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/coiny/coiny_5.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/coiny/coiny_6.png" alt="" />
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
                            onClick={() => window.location.href = "/project/port22"}
                          >
                            2022 Logofolio
                          </h1>
                        </Copy>
                      </div>
                    </div>
        </section>
    </div>
  );
};

export default page;
