import React from "react";
import styled from "styled-components";
import Logo from "../logo";
import { Typography, TextField, Button, Stack, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContextProvider";
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;
const Container = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: white;
  padding: 2rem 3rem 3.5rem 3rem;
  border-radius: 1rem;
  box-shadow: 2px 3px 4px #b6aeae;
  @media (max-width: 500px) {
    padding: 0.7rem 1.5rem 2rem 1.5rem;
  }
`;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { logIn, authErrorMessage, authLoading } = useAuth();
  const onSubmit = (data) => logIn(data);

  return (
    <Wrapper>
      <Container>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Logo />
        </div>
        <Typography variant="h4">Log In</Typography>
        <br />
        <Typography variant="body2" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicang.
        </Typography>
        <br />
        <br />
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <TextField
              type={"email"}
              fullWidth
              error={
                (authErrorMessage && true) || errors.email?.type === "required"
              }
              id="demo-helper-text-misaligned-no-helper"
              label="Email"
              helperText={
                authErrorMessage ||
                (errors.email?.type === "required" && "Email is required.")
              }
              {...register("email", { required: true })}
              autoFocus
            />
            <Button
              variant="contained"
              type="submit"
              size="large"
              disabled={authLoading}
            >
              Log In
            </Button>
            <Divider>Or</Divider>
            <Button
              variant="outlined"
              type="button"
              size="large"
              disabled={authLoading}
              onClick={() => router.push("/signUp")}
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default LoginForm;
