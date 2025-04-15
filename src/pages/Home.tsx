import { useQuery, useMutation } from "@tanstack/react-query";
import { createUser, fetchUsers } from "../service/Test";

interface UserData {
  title: string;
  body: string;
  userId: number;
}

const Home = () => {
  // Queries
  const query = useQuery({ queryKey: ["todos"], queryFn: fetchUsers });

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

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <ul>
        {query.data?.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
