import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  max-width: 300px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  margin-left: 1rem;
  @media (max-width: 630px) {
    max-width: 200px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  /* height: 100%; */
  background-color: #1f1f1f;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    transition: all 0.5s;
    filter: brightness(0.4);
  }
  &:hover img {
    filter: brightness(1.2);
  }
  @media (max-width: 630px) {
    height: 200px;
  }
`;
const Footer = styled.div`
  background-color: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  @media (max-width: 630px) {
    margin-bottom: 1rem;
  }
`;
export const CardOption = ({ imgSrc, title }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imgSrc} alt={title} objectFit="contain" />
      </ImageContainer>
      <Footer>{title}</Footer>
    </Container>
  );
};
