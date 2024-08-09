import Topheader from "./Topheader";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "../Context/AuthContext";
import { useEffect } from "react";

export default function Layout() {
  const { setAccessToken } = useAuth();
  const tkn = localStorage.getItem("accessToken");

  useEffect(() => {
    setAccessToken(tkn);
  }, [setAccessToken, tkn]);

  return (
    <>
      <Topheader />
      <Navbar />

      <main className="layout">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
