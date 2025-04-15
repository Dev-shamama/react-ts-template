import { useQuery, useMutation } from "@tanstack/react-query";
import { createUser, fetchUsers } from "../service/Test";
import { setUserLogout } from "../app/feature/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface UserData {
  title: string;
  body: string;
  userId: number;
}

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Queries
  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchUsers });

  const mutation = useMutation({
    mutationFn: (userData: UserData) => {
      return createUser(userData);
    },
  });

  const handleClick = () => {
    mutation.mutate({
      title: "foo",
      body: "bar",
      userId: 1,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setUserLogout());
    navigate("/login");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <ul>
        {query.data?.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
