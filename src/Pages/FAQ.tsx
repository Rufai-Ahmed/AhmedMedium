import { FaAngleDown, FaLongArrowAltRight } from "react-icons/fa";
import styled from "styled-components";

const FAQ = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>Apply now</Text>
          <Icon>
            <FaLongArrowAltRight />
          </Icon>
        </Wrapper>
      </Container>
      <Container style={{ backgroundColor: "black", color: "white" }}>
        <Wrapper>
          <Text>FAQ</Text>
          <Icon>
            <FaAngleDown />
          </Icon>
        </Wrapper>
      </Container>
    </div>
  );
};

export default FAQ;

const Icon = styled.div`
  font-size: 90px;
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;

const Text = styled.div`
  font-size: 90px;
  font-family: Times New Roman;
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  transition: all 600ms;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
    border-bottom: 3px solid white;
  }
`;
