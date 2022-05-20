import Head from "next/head";
import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import PublicRoute from "../../components/accessLevel/PublicRoute";
const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <PublicRoute>
        <LoginForm />
      </PublicRoute>
    </>
  );
};

export default LoginPage;
