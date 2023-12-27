import { Outlet } from "react-router";
// import { useState } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";

const SharedLayout = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = true;

  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default SharedLayout;
