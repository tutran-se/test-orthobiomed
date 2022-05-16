import React, { useState, useEffect, useContext } from "react";
import { API_CALL } from "../../helpers/apiCall";

const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthStateReady: false,
    isAuthenticated: false,
  });
  const [userInfo, setUserInfo] = useState({});
  const logIn = async (formData) => {
    try {
      const { data } = await API_CALL({
        method: "post",
        url: "/auth",
        data: formData,
      });
      console.log(data);
    } catch (error) {
      setUserInfo({});
      setAuthState({ isAuthStateReady: true, isAuthenticated: false });
      console.log(error);
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
      value={{ ...authState, userInfo, setUserInfo, logIn, logOut }}
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
