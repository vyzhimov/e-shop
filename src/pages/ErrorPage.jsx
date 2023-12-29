import React from "react";
import ErrorImage from "../assets/images/notfound.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex h-screen flex-col items-center justify-center">
      <img
        src={ErrorImage}
        alt="page-not-found"
        className="mb-3 w-28 md:w-40 lg:w-64 "
      ></img>
      <h1 className="mb-3 text-xl font-bold uppercase">
        Sorry, page not found
      </h1>
      <Link
        to="/"
        className=" hover:bg-accent-color hover:text-third-color default_transition  rounded-lg border p-2 text-sm uppercase"
      >
        return to the home page
      </Link>
    </div>
  );
};

export default ErrorPage;
