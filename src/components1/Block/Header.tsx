import react, { useState } from "react";
import styled from "styled-components";
import pix from "../../assets1/download-removebg-preview (8).png";
import pix2 from "../../assets1/download-removebg-preview (9).png";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show);
  };

  const [scrl, setScrl] = useState(false);
  const scrollTop = () => {
    const page = window.pageYOffset;
    if (page >= 100) {
      setScrl(true);
    } else {
      setScrl(false);
    }
  };
  window.addEventListener("scroll", scrollTop);
  return (
    <div>
      {scrl ? (
        <Container po="fixed" bg="white" bb="1px solid black">
          <Left>
            <img src={pix2} />
          </Left>
          <Right>
            <Navs cl="black">
              <Nav>
                <Link
                  to="/About"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Our Story
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/membership"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Membership
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/write"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Write
                </Link>
              </Nav>
              <Nav></Nav>
            </Navs>
            <Button cl="white" bg="black">
              Get Unlimited Access
            </Button>
          </Right>
          <Icon onClick={Toggle}>{show ? <p>X</p> : <FiMenu />}</Icon>
        </Container>
      ) : (
        <Container po="sticky" bg="#1a73e8" bb="1px solid white">
          <Left>
            <img src={pix} />
          </Left>
          <Right>
            <Navs cl="white">
              <Nav>
                <Link
                  to="/About"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Our Story
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/membership"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Membership
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/write"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Write
                </Link>
              </Nav>
              <Nav></Nav>
            </Navs>
            <Button cl="white" bg="black">
              Get Unlimited Access
            </Button>
          </Right>
          <Icon onClick={Toggle}>{show ? <p>X</p> : <FiMenu />}</Icon>
        </Container>
      )}
      {show ? <Drop></Drop> : null}
    </div>
  );
};

export default Header;
const Drop = styled.div`
  height: 100vh;
  width: 100%;
  overflow: clip;
  background-color: purple;
  position: absolute;
  position: fixed;
  top: 80px;
  z-index: 200;
`;
const Icon = styled.div`
  font-size: 23px;
  display: none;
  cursor: pointer;
  @media (max-width: 1000px) {
    display: flex;
    margin-right: 17px;
  }
`;
const Nav = styled.div``;
const Button = styled.div<{ cl: string; bg: string }>`
  padding: 10px 15px;
  color: ${({ cl }) => cl};
  background-color: ${({ bg }) => bg};
  border-radius: 15px;
  &:hover {
    color: aliceblue;
  }
`;
const Navs = styled.div<{ cl: string }>`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ cl }) => cl};
`;
const Right = styled.div`
  height: 40px;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 17px;
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Left = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
  }
  margin-left: 12px;
  @media (max-width: 768px) {
    width: 170px;
  }
`;
const Container = styled.div<{ po: string; bg: string; bb: string }>`
  height: 80px;
  width: 100%;
  display: flex;
  border-bottom: ${({ bb }) => bb};
  // background-color:blue;
  justify-content: space-between;
  align-items: center;
  overflow: clip;
  background-color: ${({ bg }) => bg};
  position: ${({ po }) => po};
  transition: all ease-in-out 350ms;
  z-index: 100;
  top: 0;
`;
