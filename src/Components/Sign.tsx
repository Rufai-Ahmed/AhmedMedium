import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";

type iSign = {
  text: string;
  ICON: any;
};

const Sign: React.FC<iSign> = ({ text, ICON }) => {
  return (
    <div>
      <Container>
        <Icon>
          <ICON />
        </Icon>
        <Signin>Sign in with {text}</Signin>
      </Container>
    </div>
  );
};

export default Sign;

const Signin = styled.div`
  font-size: 17px;
  margin: 0px 30px 0 0;
`;

const Icon = styled.div`
  width: 20px;
  font-size: 18px;
  margin: 4px 0 0 20px;
`;

const Container = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  gap: 20px;
  align-items: center;
`;
