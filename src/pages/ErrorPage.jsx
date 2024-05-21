import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <h1>ERROR {error?.status || 404}</h1>
      <p>{error?.message}</p>

      <Link to="/">Back to Home page</Link>
    </div>
  );
};

export default ErrorPage;
