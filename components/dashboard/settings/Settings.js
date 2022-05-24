import React from "react";
import styled from "styled-components";
import UserTable from "./UserTable";
const Container = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
`;
const Settings = () => {
  return (
    <Container>
      <UserTable />
    </Container>
  );
};

export default Settings;
