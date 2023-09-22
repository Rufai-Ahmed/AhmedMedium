import Header from "../Block/Header";
import { Outlet } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen";

const Layout = () => {
  return (
    <div>
      <Header />
      <HomeScreen />
    </div>
  );
};

export default Layout;
