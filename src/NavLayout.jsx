import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function NavLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default NavLayout;
