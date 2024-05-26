import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">ERROR {error?.status || 404}</h1>
      <p>{error?.message}</p>

      <Link className="btn btn-outline btn-success hover:text-white" to="/">Back to Home page</Link>
    </div>
  );
};

export default ErrorPage;
