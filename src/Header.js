import React from "react";
import styled from "styled-components";
import meenoi from "./assets/meenoi.jpg";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Head = styled.div`
  margin-top: 30px;
  width: 80%;
  height: 500px;
  background-color: #0d0d0d;
  background-size: contain;
  background-image: url(${meenoi});
  opacity: 0;
`;

const Header = () => {
  const ref = useRef(null);
  const headerAnim = () => {
    gsap.to(ref.current, { opacity: 1, delay: 0.5, duration: 3 });
  };
  useEffect(() => {
    headerAnim();
  }, []);

  return (
    <>
      {" "}
      <Head ref={ref}></Head>
    </>
  );
};

export default Header;
