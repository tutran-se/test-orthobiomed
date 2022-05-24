import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import UploadForm from "../../components/dashboard/upload/UploadForm";
import LayOut from "../../components/layout";
import styled from "styled-components";
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
const PatientDataUploadPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Patient Data Upload</title>
      </Head>
      <LayOut>
        <Wrapper>
          <Container>
            <h1>Patient Data Upload</h1>
            <p>
              <BreadCumbItem isLink={true} onClick={() => router.push("/")}>
                Home
              </BreadCumbItem>{" "}
              / <BreadCumbItem>Patient Upload</BreadCumbItem>
            </p>
          </Container>
          <UploadForm />
        </Wrapper>
      </LayOut>
    </>
  );
};

export default PatientDataUploadPage;
