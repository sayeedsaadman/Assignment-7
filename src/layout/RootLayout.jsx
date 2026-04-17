import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const RootLayout = () => (
  <div className="min-h-screen flex flex-col bg-stone-50">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <ToastContainer position="top-right" autoClose={3000} />
  </div>
);

export default RootLayout;