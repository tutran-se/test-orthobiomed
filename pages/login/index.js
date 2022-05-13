import Head from "next/head";
import React from "react";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default LoginPage;
