import React, { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import meenoi from "./assets/meenoi.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ArticleContainer = styled.div`
  width: 80%;
  height: 500px;
  overflow: hidden;

  margin-top: 1000px;
  display: flex;
  justify-content: space-around;
`;

const ImageContainer = styled.div`
  width: auto;
  height: auto;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  color: white;
  width: 400px;
  height: 300px;
  overflow: hidden;

  h2 {
    font-size: 60px;
    margin-top: 0;
  }

  p {
    font-size: 25px;
  }
`;

const Article = () => {
  const infoContainerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imgRef = useRef(null);
  const articleContainerRef = useRef(null);

  const ehe = () => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: articleContainerRef.current,
          start: "top bottom",
          markers: true,
          scrub: 1,
        },
      })
      .to(imgRef.current, { y: -100 });
  };

  const xd = () => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: articleContainerRef.current,
          start: "top bottom",
          markers: true,
        },
      })

      .to(imageContainerRef.current, { scale: 1.2, delay: 0 });
  };

  const waha = () => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: articleContainerRef.current,
          start: "top bottom",

          markers: true,
        },
      })
      .from(infoContainerRef.current, {
        y: -500,
        opacity: 0,
        duration: 0.5,
      });
  };

  const anim = () => {
    ehe();

    waha();
  };

  useEffect(() => {
    anim();
  }, []);

  return (
    <>
      {" "}
      <ArticleContainer ref={articleContainerRef}>
        <ImageContainer ref={imageContainerRef}>
          <img src={meenoi} alt='' ref={imgRef}></img>
        </ImageContainer>
        <InfoContainer ref={infoContainerRef}>
          <h2>Hello there brother haha</h2>
          <p>
            Lorem lorem ayoko mag search ng lorem eh bakit ba hahaha grabe ka
            naman.
          </p>
        </InfoContainer>
      </ArticleContainer>{" "}
    </>
  );
};

export default Article;
