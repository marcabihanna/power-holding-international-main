import { useEffect } from "react";
import bgImage3 from "../../assets/images/PIH-assets-the-18.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./HeroBanner.css";

function HeroBanner() {
  const { innerHeight } = window;
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionScroller = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: "section",
        pin: true,
        end: `+=${innerHeight * 6}`,
        scrub: 4,
      },
    });
    sectionScroller
      .to(".square-wrapper", {
        rotate: 90,
        duration: 2,
        scale: 3,
        x: "30vw",
        y: "30vh",
      })
      .to(
        ".square-1 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -200,
          yPercent: -270,
        },
        "-=1.25"
      )
      .to(
        ".square-10 .circle",
        {
          rotate: 45,
          scale: 4,
          opacity: 0.3,
          xPercent: -20,
          yPercent: 50,
          duration: 1,
        },
        "-=1.25"
      )
      .to(
        ".square-10 img",
        {
          rotate: -90,
          duration: 0.3,
        },
        "-=1.5"
      )
      .to(
        ".square-10 img",
        {
          rotate: -90,
          scale: 4,
          xPercent: -20,
          yPercent: 50,
          duration: 1,
          opacity: 1,
        },
        "-=1.25"
      )

      .to(
        ".square-14 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: 160,
          yPercent: 210,
        },
        "-=1.25"
      )
      .to(
        ".square-9 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -350,
          yPercent: -150,
        },
        "-=1.23"
      )
      .to(
        ".circle-left-three .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -360,
          yPercent: -100,
        },
        "-=1.23"
      )
      .to(
        ".circle-bottom-three .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: 380,
          yPercent: 350,
        },
        "-=1.2"
      )
      .to(
        ".circle-left-two .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -380,
          yPercent: -250,
        },
        "-=1.2"
      )
      .to(
        ".circle-left-four .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -380,
        },
        "-=1.2"
      )
      .to(
        ".square-5 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -190,
          yPercent: -180,
        },
        "-=1.22"
      )
      .to(
        ".circle-left-one .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -350,
          yPercent: -200,
        },
        "-=1.3"
      )
      .to(
        ".square-13 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -250,
          yPercent: 100,
        },
        "-=1.3"
      )
      .to(
        ".square-15 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          x: 100,
          y: 30,
        },
        "-=1.23"
      )
      .to(
        ".square-6 .circle",
        {
          rotate: -45,
          scale: 1.5,
          duration: 1,
          yPercent: -150,
          opacity: 1,
        },
        "-=1.2"
      )
      .to(
        ".square-6 img",
        {
          rotate: -90,
          scale: 1.5,
          yPercent: -150,
          duration: 1,
          opacity: 0,
        },
        "-=1.2"
      )
      .to(
        ".square-7 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: 80,
          yPercent: -60,
        },
        "-=1.2"
      )
      .to(
        ".square-11 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: 180,
          yPercent: 30,
        },
        "-=1.2"
      )
      .to(
        ".square-11 img",
        {
          rotate: 45,
          opacity: 0,
          scale: 1.3,
          duration: 1,
          xPercent: 180,
          yPercent: 30,
        },
        "-=1.2"
      )
      .to(
        ".square-12 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: 180,
          yPercent: -120,
        },
        "-=1.2"
      )
      .to(
        ".square-2 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -130,
          yPercent: -220,
        },
        "-=1.2"
      )
      .to(
        ".square-3 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: 50,
          yPercent: -180,
        },
        "-=1.2"
      )
      .to(
        ".square-4 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: 50,
          yPercent: -180,
        },
        "-=1.2"
      )
      .to(
        ".square-8 .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: 100,
          yPercent: -160,
        },
        "-=1.2"
      )
      .to(
        ".circle-bottom-one .circle",
        {
          rotate: 45,
          scale: 1.5,
          duration: 1,
          opacity: 0.5,
          xPercent: -100,
          yPercent: 860,
        },
        "-=1.23"
      )
      .to(
        ".circle-bottom-two .circle",
        {
          rotate: 45,
          scale: 1.5,
          duration: 1,
          opacity: 0.7,
          xPercent: 300,
          yPercent: 760,
        },
        "-=1.2"
      )
      .to(
        ".circle-top-three .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          y: -150,
          x: 20,
        },
        "-=1.2"
      )
      .to(
        ".circle-top-four .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          y: -150,
          x: 20,
        },
        "-=1.2"
      )
      .to(
        ".circle-top-five .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          y: -50,
          x: 20,
        },
        "-=1.2"
      )
      .to(
        ".circle-top-six .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          x: 20,
        },
        "-=1.2"
      )
      .to(
        ".circle-bottom-four .circle",
        {
          rotate: 45,
          scale: 0.3,
          duration: 1,
          y: 40,
          x: 40,
        },
        "-=1.23"
      )
      .to(
        ".circle-top-one .circle",
        {
          rotate: 45,
          duration: 1,
          y: -140,
          x: -50,
        },
        "-=1.23"
      )
      .to(
        ".circle-top-two .circle",
        {
          rotate: 45,
          duration: 1,
          y: -140,
          x: -10,
        },
        "-=1.23"
      )

      //first content animation start here
      .to(
        ".content-left-area ul li",
        {
          duration: 1,
          xPercent: 0,
          opacity: 1,
          stagger: 0.1,
          x: 0,
        },
        "-=1.23"
      );
    // next step start here
    sectionScroller
      .to(".square-wrapper", {
        rotate: -45,
        duration: 2,
        scale: 3,
        x: "-20vw",
        y: "-8vh",
      })
      .to(
        ".content-left-area ul li",
        {
          duration: 1,
          y: "100vh",
          stagger: -0.03,
          x: 0,
        },
        "-=2"
      )
      .to(
        ".square-10 img",
        {
          rotate: -10,
          scale: 1.5,
          xPercent: -200,
          yPercent: 220,
          duration: 1,
          opacity: 1,
        },
        "-=2"
      )
      .to(
        ".square-10 .circle",
        {
          rotate: 45,
          scale: 1.5,
          opacity: 0.2,
          xPercent: -200,
          yPercent: 220,
          duration: 1,
        },
        "-=2"
      )
      .to(
        ".square-6 .circle",
        {
          rotate: 0,
          scale: 4,
          opacity: 0,
          duration: 2,
          xPercent: -80,
          yPercent: 100,
        },
        "-=2"
      )
      .to(
        ".square-6 img",
        {
          rotate: 45,
          duration: 2,
        },
        "-=2"
      )
      .to(
        ".square-6 img",
        {
          scale: 4,
          xPercent: -80,
          yPercent: 100,
          duration: 2,
          opacity: 1,
        },
        "-=2"
      )
      .to(
        ".square-13 .circle",
        {
          rotate: 45,
          scale: 1,
          duration: 1,
          xPercent: -450,
          yPercent: 300,
        },
        "-=2"
      )
      .to(
        ".circle-left-three .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          xPercent: -560,
          yPercent: -300,
        },
        "-=2"
      )
      .to(
        ".square-11 .circle",
        {
          rotate: 45,
          scale: 0.8,
          duration: 1,
          opacity: 0.8,
          xPercent: 110,
          yPercent: 40,
        },
        "-=2"
      )
      .to(
        ".square-11 img",
        {
          rotate: 45,
          scale: 0.8,
          duration: 1,
          opacity: 0,
          xPercent: 110,
          yPercent: 40,
        },
        "-=2"
      )
      .to(
        ".square-7 .circle",
        {
          rotate: 45,
          scale: 1,
          opacity: 0.7,
          duration: 1,
          xPercent: 80,
          yPercent: -90,
        },
        "-=2"
      )
      .to(
        ".square-2 .circle",
        {
          rotate: 45,
          opacity: 0.7,
          scale: 1,
          duration: 1,
          xPercent: -30,
          yPercent: -220,
        },
        "-=2"
      )
      .to(
        ".circle-top-three .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          y: -150,
          x: -120,
        },
        "-=2"
      )
      .to(
        ".square-3 .circle",
        {
          rotate: 45,
          scale: 1,
          opacity: 0.7,
          duration: 1,
          xPercent: 50,
          yPercent: -280,
        },
        "-=2"
      )
      .to(
        ".circle-top-five .circle",
        {
          scale: 1.3,
          duration: 1,
          y: -150,
          x: 100,
        },
        "-=2"
      )
      .to(
        ".square-4 .circle",
        {
          scale: 1,
          duration: 1,
          xPercent: 150,
          yPercent: -280,
        },
        "-=2"
      )
      .to(
        ".square-8 .circle",
        {
          scale: 1,
          opacity: 0.7,
          duration: 1,
          xPercent: 300,
          yPercent: -260,
        },
        "-=2"
      )
      .to(
        ".circle-right-one .circle",
        {
          scale: 1,
          opacity: 0.7,
          duration: 1,
          xPercent: 300,
          yPercent: 60,
        },
        "-=2"
      )
      .to(
        ".circle-right-two .circle",
        {
          scale: 1,
          opacity: 0.7,
          duration: 1,
          xPercent: 250,
          yPercent: 60,
        },
        "-=2"
      )
      .to(
        ".square-16 .circle",
        {
          scale: 1,
          opacity: 0.8,
          duration: 1,
          xPercent: 250,
          yPercent: 200,
        },
        "-=2"
      )
      .to(
        ".circle-right-three .circle",
        {
          scale: 1,
          opacity: 0.7,
          duration: 1,
          xPercent: 250,
          yPercent: 100,
        },
        "-=2"
      )
      .to(
        ".circle-bottom-six .circle",
        {
          scale: 2,
          duration: 1,
          xPercent: -150,
          backgroundColor: "#C3D5E9",
          yPercent: 250,
        },
        "-=2"
      )
      .to(
        ".square-14 .circle",
        {
          rotate: 45,
          scale: 1.2,
          duration: 1,
          backgroundColor: "#8EB1D7",
          opacity: 0.7,
          xPercent: 60,
          yPercent: 150,
        },
        "-=2"
      )
      .to(
        ".square-15 .circle",
        {
          rotate: 45,
          scale: 0.6,
          duration: 1,
          xPercent: -70,
          yPercent: -20,
        },
        "-=2"
      )
      .to(
        ".circle-right-four .circle",
        {
          rotate: 45,
          scale: 1,
          duration: 1,
          xPercent: 250,
          yPercent: 0,
        },
        "-=2"
      )
      .to(
        ".circle-bottom-three .circle",
        {
          rotate: 45,
          scale: 0.8,
          duration: 1,
          xPercent: 640,
          yPercent: 540,
          backgroundColor: "#f2f8ff",
        },
        "-=2"
      )
      .to(
        ".circle-bottom-five .circle",
        {
          rotate: 45,
          scale: 0,
        },
        "-=2"
      )
      .to(
        ".circle-bottom-four .circle",
        {
          rotate: 45,
          scale: 0.8,
          backgroundColor: "#e6f2ff",
          xPercent: 150,
          yPercent: 250,
        },
        "-=2"
      )
      //first content animation start here
      .to(
        ".content-right-area ul li",
        {
          duration: 1.3,
          xPercent: 0,
          opacity: 1,
          stagger: 0.06,
          x: 0,
        },
        "-=1.9"
      );
    // next step start here
    sectionScroller
      .to(".square-wrapper", {
        rotate: 45,
        duration: 2,
        scale: 2.25,
        x: "10vw",
        y: "-50vh",
      })
      .to(
        ".square-6 .circle",
        {
          rotate: -45,
          scale: 1.5,
          opacity: 1,
          duration: 2,
          xPercent: -150,
          yPercent: 100,
        },
        "-=2"
      )
      .to(
        ".square-6 img",
        {
          rotate: -45,
          scale: 1.5,
          xPercent: -150,
          yPercent: 100,
          duration: 2,
          opacity: 0,
        },
        "-=2"
      )
      .to(
        ".square-10",
        {
          duration: 0.1,
          opacity: 0,
        },
        "-=2.5"
      )
      .to(
        ".square-11 .circle",
        {
          rotate: 0,
          scale: 5.5,
          duration: 1,
          opacity: 0.2,
          xPercent: 200,
          yPercent: 0,
        },
        "-=2"
      )
      .to(
        ".square-11 img",
        {
          rotate: -45,
          scale: 5.5,
          duration: 1,
          opacity: 1,
          xPercent: 200,
          yPercent: 0,
        },
        "-=2"
      )

      .to(
        ".content-right-area ul li",
        {
          duration: 1,
          y: "70vh",
          opacity: 0.3,
          stagger: -0.03,
          x: 0,
        },
        "-=2"
      )
      .to(
        ".square-15 .circle",
        {
          rotate: -45,
          scale: 1,
          duration: 1,
          opacity: 0.3,
          xPercent: 200,
          yPercent: 300,
        },
        "-=2"
      )
      .to(
        ".circle-bottom-six .circle",
        {
          scale: 2,
          duration: 1,
          xPercent: 250,
          backgroundColor: "#C3D5E9",
          yPercent: 950,
        },
        "-=2"
      )
      .to(
        ".circle-bottom-six .circle",
        {
          opacity: 0,
        },
        "-=1.6"
      )
      .to(
        ".square-16 .circle",
        {
          scale: 1,
          opacity: 0.8,
          duration: 1,
          xPercent: 450,
          yPercent: 600,
        },
        "-=2"
      )
      .to(
        ".square-12 .circle",
        {
          rotate: 45,
          scale: 1,
          opacity: 1,
          duration: 1,
          xPercent: 380,
          backgroundColor: "#8EB1D7",
          yPercent: -420,
        },
        "-=2"
      )
      .to(
        ".circle-right-two .circle",
        {
          scale: 0.6,
          opacity: 0,
          duration: 1,
          xPercent: 500,
          yPercent: -60,
        },
        "-=2"
      )
      .to(
        ".circle-right-one .circle",
        {
          scale: 1,
          opacity: 0.7,
          duration: 1,
          xPercent: 600,
          yPercent: 60,
        },
        "-=2"
      )
      .to(
        ".square-8 .circle",
        {
          scale: 1,
          opacity: 0.7,
          duration: 1,
          xPercent: 600,
          yPercent: -260,
        },
        "-=2"
      )
      .to(
        ".circle-top-six .circle",
        {
          rotate: 45,
          scale: 1.3,
          duration: 1,
          x: -100,
        },
        "-=2"
      )
      .to(
        ".circle-right-three .circle",
        {
          scale: 1,
          opacity: 0.7,
          duration: 1,
          xPercent: 650,
          yPercent: 100,
        },
        "-=2"
      )
      .to(
        ".circle-right-four .circle",
        {
          rotate: 45,
          scale: 1,
          duration: 1,
          xPercent: 500,
          yPercent: 250,
        },
        "-=2"
      )
      .to(
        ".circle-bottom-one .circle",
        {
          rotate: 45,
          scale: 2.5,
          duration: 1,
          opacity: 0.7,
          xPercent: -100,
          yPercent: 860,
        },
        "-=2"
      )
      //first content animation start here
      .to(
        ".content-top-area ul li",
        {
          duration: 1.3,
          y: 0,
          xPercent: 0,
          opacity: 1,
          stagger: -0.05,
          x: 0,
        },
        "-=2"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section>
        <div className="background-overlay">
          <img src={bgImage3} alt="" />
        </div>
        <div className="section">
          <ul className="square-wrapper">
            <li className="circle-top-wrapper">
              <ul>
                <li className="circle-top-one dots-sm">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-top-two dots-md">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-top-three dots-lg">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-top-four dots-lg">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-top-five dots-md">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-top-six dots-sm">
                  {" "}
                  <div className="circle"></div>
                </li>
              </ul>
            </li>
            <li className="circle-bottom-wrapper">
              <ul>
                <li className="circle-bottom-one dots-sm">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-bottom-two dots-md">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-bottom-three dots-lg">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-bottom-four dots-lg">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-bottom-five dots-md">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-bottom-six dots-sm">
                  {" "}
                  <div className="circle"></div>
                </li>
              </ul>
            </li>
            <li className="dots-lg square-1">
              <div className="circle"></div>
            </li>
            <li className="dots-xl square-2">
              <div className="circle"></div>
            </li>
            <li className="dots-xl square-3">
              <div className="circle"></div>
            </li>
            <li className="dots-lg square-4">
              <div className="circle"></div>
            </li>
            <li className="dots-xl square-5">
              <div className="circle"></div>
            </li>
            <li className="dots-xxl square-6">
              <div className="circle"></div>
              <img
                className="over-zoom-image"
                src="https://plus.unsplash.com/premium_photo-1710514754126-606ceb7291d3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </li>
            <li className="dots-xxl square-7">
              <div className="circle"></div>
            </li>
            <li className="dots-xl square-8">
              <div className="circle"></div>
            </li>
            <li className="dots-xl square-9">
              <div className="circle"></div>
            </li>
            <li className="dots-xxl square-10 over-zoom">
              <div className="circle"></div>
              <img
                className="over-zoom-image"
                src="https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </li>
            <li className="dots-xxl square-11">
              <div className="circle"></div>
              <img
                className="over-zoom-image"
                src="https://images.unsplash.com/photo-1576059620175-9b608f96797b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </li>
            <li className="dots-xl square-12">
              <div className="circle"></div>
            </li>
            <li className="dots-lg square-13">
              <div className="circle"></div>
            </li>
            <li className="dots-xxl square-14">
              <div className="circle"></div>
            </li>
            <li className="dots-xl square-15">
              <div className="circle"></div>
            </li>
            <li className="dots-lg square-16">
              <div className="circle"></div>
            </li>
            <li className="circle-left-wrapper">
              <ul>
                <li className="circle-left-one dots-md">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-left-two dots-lg">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-left-three dots-lg">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-left-four dots-md">
                  {" "}
                  <div className="circle"></div>
                </li>
              </ul>
            </li>
            <li className="circle-right-wrapper">
              <ul>
                <li className="circle-right-one dots-md">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-right-two dots-lg">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-right-three dots-lg">
                  {" "}
                  <div className="circle"></div>
                </li>
                <li className="circle-right-four dots-md">
                  {" "}
                  <div className="circle"></div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* part one text */}
        <div className="content-left-area content-comon-style">
          <ul>
            <li>POWER</li>
            <li>INTERNATIONAL</li>
            <li>HOLDING</li>
            <li>Building for generations</li>
          </ul>
        </div>
        <div className="content-right-area content-comon-style">
          <ul>
            <li>PIH</li>
            <li>MARKETING</li>
            <li>DEPARTMENT</li>
            <li>THE E18HTEEN</li>
          </ul>
        </div>
        <div className="content-top-area content-comon-style content-last">
          <ul>
            <li>PIH</li>
            <li>MARKETING</li>
            <li>DEPARTMENT</li>
            <li>THE E18HTEEN</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
