import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import ProtectedRoute from "../../components/accessLevel/ProtectedRoute";
const Wrapper = styled.div`
  display: flex;
`;
const Container = styled.div`
  display: grid;
  place-items: center;
  flex-grow: 1;
`;
const LayOut = ({ children }) => {
  return (
    <ProtectedRoute>
      <Wrapper>
        <SideBar />
        <Container>{children}</Container>
      </Wrapper>
    </ProtectedRoute>
  );
};

export default LayOut;
