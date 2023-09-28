import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LOGO from "../Asset/medium-removebg-preview.png";

const Layout = () => {
  return (
    <div>
      <Header bcc="1" logo={LOGO} brd="1" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 12%;
`;
