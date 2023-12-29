import React from "react";
import ErrorImage from "../assets/images/notfound.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Link
        to={"/"}
        className="flex h-[60vh] w-full flex-col items-center justify-center "
      >
        <img
          src={ErrorImage}
          alt="page-not-found"
          className="w-28 md:w-40 lg:w-64 "
        ></img>
        <h1>Sorry, page not found</h1>
        <p>Click here to back to the home page</p>
      </Link>
    </div>
  );
};

export default ErrorPage;
