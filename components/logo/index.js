import Image from "next/image";
import React from "react";
import styled from "styled-components";
import logoFullSrc from "./logo-full.png";
const LogoContainer = styled.div`
  width: 200px;
  position: relative;
  overflow: hidden;
`;
const Logo = () => {
  return (
    <LogoContainer>
      <Image src={logoFullSrc} alt="logoFull" objectFit="cover" />
    </LogoContainer>
  );
};

export default Logo;
