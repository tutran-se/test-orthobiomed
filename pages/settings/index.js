import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import UploadForm from "../../components/dashboard/upload/UploadForm";
import LayOut from "../../components/layout";
import styled from "styled-components";
import Settings from "../../components/dashboard/settings/Settings";
const Container = styled.div``;
const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
  padding: 0rem 0 0 5rem;
  @media (max-width: 912px) {
    & h1 {
      font-size: 22px;
    }
  }
`;
const BreadCumbItem = styled.span`
  font-size: 14px;
  cursor: ${({ isLink }) => isLink && "pointer"};
  color: ${({ isLink }) => !isLink && "grey"}; ;
`;
const SettingsPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <LayOut>
        <Wrapper>
          <Container>
            <h1>Settings</h1>
            <p>
              <BreadCumbItem isLink={true} onClick={() => router.push("/")}>
                Home
              </BreadCumbItem>{" "}
              / <BreadCumbItem>Settings</BreadCumbItem>
            </p>
          </Container>
          <Settings />
        </Wrapper>
      </LayOut>
    </>
  );
};

export default SettingsPage;
