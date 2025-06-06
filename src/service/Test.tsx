import api from "../helper/axios";
import { handleRequest } from "../helper/trycatch";

export const fetchUsers = () => handleRequest(api.get("/posts"));

// User Login Checking Point
export const getUser = (token: any) =>
  handleRequest(
    api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

// GET
export const createUser = (user: any) =>
  handleRequest(
    api.post("/auth/login", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

// POST
export const createUserWithHeader = (user: any) =>
  handleRequest(
    api.post("/posts", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

// DELETE
export const deleteUser = (id: any) =>
  handleRequest(api.delete(`/posts/${id}`));

// PUT
export const putUser = (id: any, user: any) =>
  handleRequest(
    api.post(`/posts${id}`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
