import styled from "styled-components";
import logo from "../Asset/medium-removebg-preview.png";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div id="bottom">
      <Container>
        <Wrapper>
          <Logo>
            <Img src={logo} />
          </Logo>

          <Link to="top" smooth={true}>
            <Back>
              Back to top <Up />{" "}
            </Back>
          </Link>
          <Links>
            <Linkk>About</Linkk>
            <Linkk>Terms</Linkk>
            <Linkk>Privacy</Linkk>
            <Linkk>Help</Linkk>
            <Linkk>Team</Linkk>
            <Linkk>Press</Linkk>
          </Links>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer;

const Up = styled(FaAngleUp)`
  margin-top: 5px;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  transition: all 500ms;
  cursor: pointer;
  gap: 3px;

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Linkk = styled.div`
  text-decoration: underline;

  @media (max-width: 500px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const Links = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 40%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Logo = styled.div`
  width: 13%;
  height: 100%;
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
  flex-wrap: wrap;
  padding: 30px 0;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
