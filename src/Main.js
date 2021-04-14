import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Article from "./Article";

const MainDiv = styled.div`
  width: 100%;
  height: 3000px;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #0d0d0d;
`;

const Main = () => {
  return (
    <>
      {" "}
      <MainDiv>
        <Header />
        <Article></Article>
      </MainDiv>{" "}
    </>
  );
};

export default Main;
