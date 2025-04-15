import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { Service } from "./pages/Service";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
    </QueryClientProvider>
  );
}

export default App;
