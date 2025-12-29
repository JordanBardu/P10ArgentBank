import { configureStore } from "@reduxjs/toolkit";

let savedToken = localStorage.getItem("token");
let savedUsername = localStorage.getItem("username");

let state = {
  token: savedToken,
  isLoggedIn: !!savedToken,
  username: savedUsername,
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

export const updateUsername = async (username) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userName: username,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour du nom d'utilisateur :",
      error,
    );
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
    case "UPDATE_USERNAME":
      return {
        ...state,
        username: action.payload.username,
      };
    case "UPDATE_USERNAME_FAILURE":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const store = configureStore({
  preloadedState: state,
  reducer,
});

store.subscribe(() => {
  const state = store.getState();

  if (state.username) {
    localStorage.setItem("username", state.username);
  }
});

export default store;
