import styled from "styled-components";
import Sign from "../Components/Sign";
import {
  FaGoogle,
  FaFacebook,
  FaApple,
  FaTwitter,
  FaMailBulk,
} from "react-icons/fa";

import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { createTrue } from "typescript";

const Signin = () => {
  const [remove, setRemove] = useState(true);

  const Diss = () => {
    setRemove(false);
  };

  return (
    <div>
      {remove ? (
        <Container>
          <Wrapper>
            <Icon onClick={Diss}>
              <MdCancel />
            </Icon>
            <Welcome>Welcome back.</Welcome>
            <SignHolder>
              <Sign text="Google" ICON={FaGoogle} />
              <Sign text="Facebook" ICON={FaFacebook} />
              <Sign text="Apple" ICON={FaApple} />
              <Sign text="Twitter" ICON={FaTwitter} />
              <Sign text="email" ICON={FaMailBulk} />
            </SignHolder>
            <NoAccount>
              No account? <span>Create one</span>
            </NoAccount>
            <Forgotten>
              Forgot email or trouble signing in? <span>Get help.</span>
            </Forgotten>
            <Terms>
              Click “Sign In” to agree to Medium’s <span>Terms of Service</span>{" "}
              and acknowledge that Medium’s <span>Privacy Policy</span> applies
              to you.
            </Terms>
          </Wrapper>
        </Container>
      ) : null}
    </div>
  );
};

export default Signin;

const Icon = styled.div`
  font-size: 50px;
  justify-content: end;
  align-items: center;
  display: flex;
  margin: 5px 5px 0 0;
  cursor: pointer;
`;

const Terms = styled.div`
  height: 15%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 15px;
  color: grey;

  margin: 70px 0px;
  span {
    text-decoration: underline;
    margin: 0px 7px;
  }
`;
const Forgotten = styled.div`
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 14px;
  color: grey;
  margin: 70px 0px;
  span {
    text-decoration: underline;
  }
`;

const NoAccount = styled.div`
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 17px;
  span {
    margin-left: 6px;
    color: green;
    font-weight: 600;

    &:hover {
      color: darkgreen;
      transition: all 350ms;
      cursor: pointer;
    }
  }
`;

const SignHolder = styled.div`
  width: 100%;
  height: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 60px 0px;
`;

const Welcome = styled.div`
  width: 100%;
  display: flex;
  height: 15%;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`;

const Wrapper = styled.div`
width: 60%;
height: 100%
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 0px 30px silver;
background-color: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: sticky;
`;
