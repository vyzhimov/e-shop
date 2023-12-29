import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SharedLayout } from "./components";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer hideProgressBar theme="dark" autoClose={2000} />
    </>
  );
}

export default App;
