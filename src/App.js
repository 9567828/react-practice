import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import FallbackRender from "./components/FallbackRender";

function App() {
  const router = createBrowserRouter([
    { path: `${process.env.PUBLIC_URL}/`, element: <Home /> },
    {
      path: `/movie/:id`,
      element: (
        <ErrorBoundary fallbackRender={FallbackRender}>
          <Detail />
        </ErrorBoundary>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
