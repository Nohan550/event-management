import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div className="flex flex-col items-center justify-center text-center h-[750px] space-y-6" id="error-page">
        <h1 className="text-5xl font-normal">Oops!</h1>
        <p className="text-3xl font-light">Sorry, an unexpected error has occurred.</p>
        <p className="text-4xl font-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/"><button className="btn btn-accent text-white btn-wide btn-circle">Return</button></Link>
      </div>
    );
};

export default ErrorPage;