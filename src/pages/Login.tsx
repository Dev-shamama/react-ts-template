import { useMutation } from "@tanstack/react-query";
import { createUser } from "../service/Test";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setUserLogin } from "../app/feature/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (auth === true) {
      navigate("/");
    }
  }, [navigate, auth]);

  const mutation = useMutation({
    mutationFn: (userData: any) => {
      return createUser(userData);
    },
  });

  const handleClick = () => {
    mutation.mutate({
      username: "emilys",
      password: "emilyspass",
    });
  };

  if (mutation.isSuccess) {
    console.log("mutation", mutation);
    localStorage.setItem("token", mutation?.data?.accessToken);
    dispatch(setUserLogin());
    navigate("/");
  }

  return (
    <>
      <h3>Login</h3>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
};

export default Login;
