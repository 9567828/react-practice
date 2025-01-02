import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>에러!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorBoundary;
