import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <ToastContainer hideProgressBar theme="dark" autoClose={2000} />
    </>
  );
}

export default App;
