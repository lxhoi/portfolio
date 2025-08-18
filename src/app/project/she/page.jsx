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
          <h1>SHE Blockchains</h1>
        </Copy>
      </section>

      <section className="sp-banner-img">
        <img src="/images/work/she/she_1.png" alt="" />
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
                <p className="sm caps mono">2024</p>
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
                <h3>Exploring Motion Through Structured Design</h3>
              </Copy>
            </div>
          </div>
          <div className="sp-col-sm">
            <div className="sp-copy-description">
              <Copy>
                <p>
                  In order to solve the story of pulling women closer to the Blockchain field, 
                  recently S.H.E Blockchain organization was born with the aim of inspiring and 
                  creating opportunities for women to participate in this industry.
                </p>
                <br />
                <p>
                  S.H.E Blockchain is sponsored by Vietnam Blockchain Union (VBU) of Vietnam Digital Media Association. 
                  VBU is a recently established Alliance to advise and advise regulatory agencies to develop policies 
                  and legal frameworks on Blockchain, digital assets and digital currencies in Vietnam. The appearance 
                  of S.H.E Blockchain is considered to blow a new breath and add a quality human resource, contributing 
                  to the development of the Blockchain industry in Vietnam in the future.
                </p>
              </Copy>

              <div className="sp-link">
                <div className="sp-link-wrapper">
                  <BtnLink route="/contact" label="Contact" />
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
            <img src="/images/work/she/she_2.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/she/she_3.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/she/she_4.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/she/she_5.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/she/she_7.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/she/she_8.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/she/she_9.png" alt="" />
          </div>
          <div className="sp-img">
            <img src="/images/work/she/she_1.png" alt="" />
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
                            onClick={() => window.location.href = "/project/bunni"}
                          >
                            Bunni Play
                          </h1>
                        </Copy>
                      </div>
                    </div>
      </section>
    </div>
  );
};

export default page;
