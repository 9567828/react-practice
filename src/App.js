import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Practice from "./routes/Practice";
import FallbackRender from "./components/FallbackRender";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/movie/:id",
      element: (
        <ErrorBoundary fallbackRender={FallbackRender}>
          <Detail />
        </ErrorBoundary>
      ),
    },
    {
      path: "/test",
      element: <Practice />,
    },
  ]);
  return <RouterProvider router={router} basename={`${process.env.PUBLIC_URL}`} />;
}

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ErrorBoundary } from "react-error-boundary";
// import Home from "./routes/Home";
// import Detail from "./routes/Detail";
// import FallbackRender from "./components/FallbackRender";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
//         <Route
//           path={`${process.env.PUBLIC_URL}/movie/:id`}
//           element={
//             <ErrorBoundary fallbackRender={FallbackRender}>
//               <Detail />
//             </ErrorBoundary>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

export default App;
