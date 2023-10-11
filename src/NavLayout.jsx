import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import NavBar from "./components/NavBar";

function NavLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <NavBar />
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}

export default NavLayout;
