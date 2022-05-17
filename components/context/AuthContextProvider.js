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

  const logOut = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        userInfo,
        setUserInfo,
        logIn,
        logOut,
        authErrorMessage,
        authLoading,
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
