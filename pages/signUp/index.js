import Head from "next/head";
import React from "react";
import SignUpForm from "../../components/auth/SignUpForm";
import PublicRoute from "../../components/accessLevel/PublicRoute";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <PublicRoute>
        <SignUpForm />
      </PublicRoute>
    </>
  );
};

export default SignUpPage;
