  import { configureStore } from "@reduxjs/toolkit";

  let state = {
    isLoggedIn: false,
    username: null,
  };

  export const getToken = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Erreur lors de la récupération du token :", error);
      return null;
    }
  };

  export const usernameSelector = (state) => state.username;
  export const isLoggedInSelector = (state) => state.isLoggedIn;

  const reducer = (state = { isLoggedIn: false, username: null }, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isLoggedIn: true,
          username: action.payload.username,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          isLoggedIn: false,
          username: null,
          error: action.payload.error,
        };
      case "LOGOUT":
        return {
          ...state,
          isLoggedIn: false,
          username: null,
        };
      default:
        return state;
    }
  };

  const store = configureStore({
    preloadedState: state,
    reducer,
  });

  export default store;
