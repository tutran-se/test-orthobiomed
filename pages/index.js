import React from "react";
import LayOut from "../components/layout";
import styled from "styled-components";
import DashBoardDefault from "../components/dashboard/home";
import Head from "next/head";
import ProtectedRoute from "../components/accessLevel/ProtectedRoute";
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
`;
const DashBoardHome = () => {
  return (
    <>
      <Head>
        <title>Dashboard Home</title>
      </Head>
      <ProtectedRoute>
        <LayOut>
          <Container>
            <DashBoardDefault />
          </Container>
        </LayOut>
      </ProtectedRoute>
    </>
  );
};

export default DashBoardHome;
