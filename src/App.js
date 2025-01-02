import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import FallbackRender from "./components/FallbackRender";

function App() {
  const router = createBrowserRouter([
    { path: `${process.env.PUBLIC_URL}/`, element: <Home /> },
    {
      path: `${process.env.PUBLIC_URL}/movie/:id`,
      element: (
        <ErrorBoundary fallbackRender={FallbackRender}>
          <Detail />
        </ErrorBoundary>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
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
