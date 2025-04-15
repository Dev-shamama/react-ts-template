import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { Service } from "./pages/Service";
import { useQuery } from "@tanstack/react-query";
import Login from "./pages/Login";
import ProtectedRouteAdmin from "./components/Route/ProtectedRoute";
import { getUser } from "./service/Test";
import { useDispatch } from "react-redux";
import { setUserLogout, setUserProfile } from "./app/feature/auth";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const { isFetched } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(token),
    enabled: !!token,
  });

  useEffect(() => {
    if (isFetched) {
      dispatch(setUserProfile());
    }else {
      dispatch(setUserLogout());
    }
  }, [isFetched, dispatch]);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Routes>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
