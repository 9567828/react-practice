import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorBoundary /> },
    { path: "/movie/:id", element: <Detail />, errorElement: <ErrorBoundary /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
