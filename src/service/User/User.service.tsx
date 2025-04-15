import api from "../../helper/axios";
import { handleRequest } from "../../helper/trycatch";

export const fetchUsers = () => handleRequest(api.get("/posts"));

// User Login Checking Point
export const getUserProfile = (token: any) =>
  handleRequest(
    api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

// User Login
export const userLogin = (user: any) =>
  handleRequest(
    api.post("/auth/login", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

// User Register
export const userRegister = (user: any) =>
  handleRequest(
    api.post("/auth/register", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
