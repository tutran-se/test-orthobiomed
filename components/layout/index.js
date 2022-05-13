import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
const Wrapper = styled.div`
  position: relative;
`;
const LayOut = ({ children }) => {
  return (
    <Wrapper>
      <SideBar />
      {children}
    </Wrapper>
  );
};

export default LayOut;
