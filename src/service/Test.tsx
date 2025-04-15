import api from "../helper/axios";
import { handleRequest } from "../helper/trycatch";

export const fetchUsers = () => handleRequest(api.get("/posts"));

// GET
export const createUser = (user: any) =>
  handleRequest(api.post("/posts", user));

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
