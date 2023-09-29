import React, { useState } from "react";
import styled from "styled-components";
import img from "../MediumLogo.png";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Write from "../../Pages/Write";
import Signin from "../../Pages/Signin";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const Drop = () => {
    setHamburger(!hamburger);
  };

  const [showArrow, setShowArrow] = useState(false);

  const display = () => {
    if (window.pageYOffset > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  window.addEventListener("scroll", display);

  const [wri, setWri] = useState(false);

  const showw = () => {
    setWri(true);
  };

  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(true);
  };
  const Remove = () => {
    setShow(false);
  };
  return (
    <div>
      {wri ? (
        <div>
          <Write />
        </div>
      ) : null}

      {show ? (
        <Hold onClick={Remove}>
          <Signin />
        </Hold>
      ) : null}

      {showArrow ? (
        <Container bg="1" po="fixed" id="top">
          <Wrapper>
            <Logo>
              <img src={img} alt="" />
            </Logo>
            <Navigate>
              <Icon onClick={Drop}> {hamburger ? <BiMenu /> : <BiMenu />}</Icon>
              <NavHold>
                <Nav>Our Story</Nav>
                <Nav>Membership</Nav>
                <Nav>Write</Nav>
                <Nav>Sign In</Nav>
              </NavHold>
              <Button bcc="black">Get Started</Button>
            </Navigate>
            {hamburger ? (
              <Card>
                <Icon onClick={Drop}>
                  {hamburger ? (
                    <AiOutlineClose style={{ color: "#fff" }} />
                  ) : (
                    <AiOutlineClose style={{ color: "#fff" }} />
                  )}
                </Icon>
                <NavLink
                  to=""
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#000" : "white",

                      textDecoration: "none",
                      width: isActive ? "100%" : "100%",
                    };
                  }}
                >
                  <DropNav>Our Story</DropNav>
                </NavLink>
                <NavLink
                  to=""
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#000" : "white",

                      textDecoration: "none",
                      width: isActive ? "100%" : "100%",
                    };
                  }}
                >
                  <DropNav>Membership</DropNav>
                </NavLink>
                <NavLink
                  to=""
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#000" : "white",

                      textDecoration: "none",
                      width: isActive ? "100%" : "100%",
                    };
                  }}
                >
                  <Link to="/write">
                    <DropNav>Write</DropNav>
                  </Link>
                </NavLink>
                <NavLink
                  to=""
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#000" : "white",
                      textDecoration: "none",
                      width: isActive ? "100%" : "100%",
                    };
                  }}
                >
                  <DropNav>Sign In</DropNav>
                </NavLink>
              </Card>
            ) : null}
          </Wrapper>
        </Container>
      ) : (
        <Container bg="" po="fixed">
          <Wrapper>
            <Logo>
              <img src={img} alt="" />
            </Logo>
            <Navigate>
              <Icon onClick={Drop}> {hamburger ? <BiMenu /> : <BiMenu />}</Icon>
              <NavHold>
                <Nav>
                  <Link
                    to="About"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Our Story
                  </Link>
                </Nav>
                <Nav>
                  <Link
                    to="membership"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Membership
                  </Link>
                </Nav>
                <Nav>
                  <Link
                    to="write"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Write
                  </Link>{" "}
                </Nav>
                <Nav onClick={Toggle}>Sign In</Nav>
              </NavHold>
              <Button bcc="black">Get Started</Button>
            </Navigate>
            {hamburger ? (
              <Card>
                <Icon onClick={Drop}>
                  {hamburger ? (
                    <AiOutlineClose style={{ color: "#fff" }} />
                  ) : (
                    <AiOutlineClose style={{ color: "#fff" }} />
                  )}
                </Icon>
                <NavLink
                  to=""
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#000" : "white",

                      textDecoration: "none",
                      width: isActive ? "100%" : "100%",
                      color: "black",
                    };
                  }}
                >
                  <DropNav>Our Story</DropNav>
                </NavLink>
                <NavLink
                  to=""
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#000" : "white",

                      textDecoration: "none",
                      width: isActive ? "100%" : "100%",
                      color: "black",
                    };
                  }}
                >
                  <DropNav>Membership</DropNav>
                </NavLink>
                <NavLink
                  to="/membership"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#000" : "white",

                      textDecoration: "none",
                      width: isActive ? "100%" : "100%",
                      color: "black",
                    };
                  }}
                >
                  <Link
                    to="/write"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <DropNav>Write</DropNav>
                  </Link>
                </NavLink>
                <NavLink
                  to=""
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#000" : "white",

                      textDecoration: "none",
                      width: isActive ? "100%" : "100%",
                    };
                  }}
                >
                  <DropNav>Sign In</DropNav>
                </NavLink>
              </Card>
            ) : null}
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Header;
const DropNav = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
`;
const Card = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const NavHold = styled.div`
  display: none;
  @media (min-width: 1026px) {
    width: 350px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Nav = styled.nav`
  font-size: 16px;
  color: black;
  cursor: pointer;
`;
const Button = styled.button<{ bcc: string }>`
  width: 100px;
  height: 30px;
  background-color: ${({ bcc }) => bcc};
  color: #fff;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }

  @media (max-width: 1026px) {
    display: none;
  }
`;
const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
  @media (min-width: 1026px) {
    display: none;
  }
`;

const Navigate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1026px) {
    width: 500px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  width: 20%;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div<{ bg: string; po: string }>`
  width: 100%;
  height: 70px;
  background-color: ${({ bg }) => (bg ? "white" : "#febf16")};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  z-index: 5;
  position: relative;
`;
const Hold = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(840, 240, 240, 0.5);
  z-index: 40;
`;
