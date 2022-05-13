import Head from "next/head";
import React from "react";
import SignUpForm from "../../components/auth/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
