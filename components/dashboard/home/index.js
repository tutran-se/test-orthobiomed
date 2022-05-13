import React from "react";
import styled from "styled-components";
import { CardOption } from "./CardOption";
import researchSrc from "./research.png";
import inHouseSrc from "./in_house.png";
import firstAidSrc from "./fisrt_aid.png";
const Container = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  @media (max-width: 630px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;
const DashBoardDefault = () => {
  return (
    <Container>
      <CardOption imgSrc={firstAidSrc} title="Clinical Usage" />
      <CardOption imgSrc={inHouseSrc} title="In-house validation" />
      <CardOption imgSrc={researchSrc} title="Research" />
    </Container>
  );
};

export default DashBoardDefault;
