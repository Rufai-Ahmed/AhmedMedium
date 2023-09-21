import styled from "styled-components";
import logo from "../Asset/medium-removebg-preview.png";
import Signin from "../Pages/Signin";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(true);
  };
  const Remove = () => {
    setShow(false);
  };

  const [smallShow, setSmallShow] = useState(false);

  const rev = () => {
    setSmallShow(true);
  };
  const rem = () => {
    setSmallShow(false);
  };

  return (
    <div id="top">
      {show ? (
        <Hold onClick={Remove}>
          <Signin />
        </Hold>
      ) : null}
      {smallShow ? (
        <Drop>
          <Wrapp>
            <X onClick={rem}>
              <MdCancel />
            </X>
            <Logo1>
              <Img src={logo} />
            </Logo1>
          </Wrapp>
        </Drop>
      ) : null}
      <Container>
        <Wrapper>
          <Logo>
            <Img src={logo} />
          </Logo>
          <Icon onClick={rev}>
            <BiMenu />
          </Icon>
          <BtnHolder>
            <Button clr="" bcc="" onClick={Toggle}>
              Sign in
            </Button>
            <Button clr="1" bcc="1">
              Sign up
            </Button>
          </BtnHolder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;
const X = styled.div`
  position: fixed;
  top: 0;
  font-size: 40px;
  right: 0;
`;

const Wrapp = styled.div`
  width: 90%;
`;

const Drop = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 5;
  background-color: white;
  position: absolute;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
  font-size: 22px;
`;

const Hold = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(840, 240, 240, 0.5);
  z-index: 40;
`;

const Button = styled.button<{ clr: string; bcc: string }>`
  padding: 12px 20px;
  color: ${({ clr }) => (clr ? "white" : "black")};
  border: 2px solid black;
  border-radius: 30px;
  background-color: ${({ bcc }) => (bcc ? "black" : "white")};
  font-size: 16px;
`;

const BtnHolder = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Logo1 = styled.div`
  height: 100%;
  width: 100%;
`;
const Logo = styled.div`
  height: 100%;
  width: 20%;
  @media (max-width: 500px) {
    width: 50%;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
