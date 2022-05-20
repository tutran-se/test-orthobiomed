import React, { useState, useEffect, useContext } from "react";
import { API_CALL } from "../../helpers/apiCall";

const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthStateReady: false,
    isAuthenticated: false,
  });
  const [userInfo, setUserInfo] = useState({});
  const [authErrorMessage, setAuthErrorMessage] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);
  const logIn = async (formData) => {
    try {
      setAuthLoading(true);
      const { data: url } = await API_CALL({
        method: "post",
        url: "/auth/",
        data: formData,
      });
      window.location.href = url;
    } catch (error) {
      console.log(error);
      setAuthLoading(false);
      setAuthErrorMessage("Invalid Email Address.");
    }
  };
  const requestAccess = async (formData) => {
    try {
      console.log(formData);
      // setAuthLoading(true);
      // const { data: url } = await API_CALL({
      //   method: "post",
      //   url: "/register/",
      //   data: formData,
      // });
      // setAuthLoading(false);
      setRequestSuccess(true);
    } catch (error) {
      console.log(error);
      setAuthLoading(false);
      setAuthErrorMessage("Email Address is already exist.");
    }
  };
  const logOut = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const { data } = await API_CALL({
        method: "get",
        url: "/me/",
      });
      setUserInfo({ ...data });
      setAuthState({ isAuthStateReady: true, isAuthenticated: true });
    } catch (error) {
      console.log(error);
      setUserInfo({});
      setAuthState({ isAuthStateReady: true, isAuthenticated: false });
    }
  };
  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        userInfo,
        setUserInfo,
        logIn,
        logOut,
        authLoading,
        authErrorMessage,
        requestSuccess,
        requestAccess,
        setRequestSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};
