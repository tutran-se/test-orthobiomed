import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../logo";
import {
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useAuth } from "../context/AuthContextProvider";
import { API_CALL } from "../../helpers/apiCall";
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
  & textarea {
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: 8px;
    font-size: 14px;
    font-family: inherit;
    border-radius: 4px;
  }
  & textarea:hover {
    border: 1px solid black;
  }
  & textarea:focus {
    outline: none !important;
    border: 2px solid #1976d2;
  }
  @media (max-width: 500px) {
    padding: 0.7rem 1.5rem 2rem 1.5rem;
  }
`;

const SignUpForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const {
    authLoading,
    authErrorMessage,
    requestSuccess,
    setRequestSuccess,
    requestAccess,
  } = useAuth();
  const onSubmit = (data) => requestAccess(data);
  useEffect(() => {
    if (requestSuccess) {
      reset();
      setTimeout(() => {
        setRequestSuccess(false);
      }, 3000);
    }
  }, [requestSuccess]);

  const [options, setOptions] = useState([]);
  const getOrganizations = async () => {
    try {
      const { data } = await API_CALL({
        method: "get",
        url: "/organizations/",
      });
      setOptions(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrganizations();
  }, []);
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
        <Typography variant="h4">Sign Up</Typography>
        <br />
        <Typography variant="body2" gutterBottom>
          Fill the form below to request access to the system.
        </Typography>
        <br />
        <br />

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              type={"text"}
              fullWidth
              error={errors.firstName?.type === "required"}
              id="demo-helper-text-misaligned-no-helper"
              label="First Name"
              helperText={
                errors.firstName?.type === "required" &&
                "First Name is required."
              }
              autoFocus
              {...register("firstName", { required: true })}
            />
            <TextField
              type={"text"}
              fullWidth
              error={errors.lastName?.type === "required"}
              id="demo-helper-text-misaligned-no-helper"
              label="Last Name"
              helperText={
                errors.lastName?.type === "required" && "Last Name is required."
              }
              {...register("lastName", { required: true })}
            />

            <FormControl
              fullWidth
              error={errors.organization?.type === "required"}
            >
              <InputLabel id="demo-simple-select-label">
                Organization
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Organization"
                style={{ textAlign: "left" }}
                {...register("organization", { required: true })}
              >
                {options.map((item) => (
                  <MenuItem value={item.name} key={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {errors.organization?.type === "required" &&
                  "Organization is required."}
              </FormHelperText>
            </FormControl>
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
            />
            <div style={{ textAlign: "left", marginBottom: "1rem" }}>
              <Typography
                variant="body2"
                gutterBottom
                style={{ color: "#000000b0" }}
              >
                Comments{" "}
              </Typography>
              <textarea
                aria-label="comment"
                placeholder="Additional information about your request..."
                style={{ width: "100%" }}
                {...register("comment")}
              ></textarea>
            </div>

            <Button
              variant="contained"
              type="submit"
              size="large"
              disabled={authLoading}
            >
              Request Access
            </Button>
            {requestSuccess && (
              <Alert severity="success">Successful Request.</Alert>
            )}

            <Divider>Or</Divider>
            <Button
              variant="outlined"
              type="button"
              size="large"
              onClick={() => router.push("/login")}
              disabled={authLoading}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default SignUpForm;
