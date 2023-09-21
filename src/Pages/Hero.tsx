import styled from "styled-components";
import cube from "../Asset/cube.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <Container>
        <Cube>
          <Wrapper>
            <LargeText>Medium Partner Program</LargeText>
            <SmallText>
              Medium’s Partner Program is for people who are interested in
              helping us fulfill our mission of deepening the collective wisdom
              of the world through personal expression, knowledge-sharing, and
              storytelling.
              <div>
                <Button>Apply Now</Button>
              </div>
            </SmallText>
            <Link to="bottom" smooth={true}>
              <Down>
                <FaAngleDown />
              </Down>
            </Link>
          </Wrapper>
        </Cube>
      </Container>
    </div>
  );
};

export default Hero;

const Down = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 40px;
  right: 50px;
  cursor: pointer;
  transition: all 500ms;
  animation: jump infinite 1s ease;

  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  color: white;
  border: 2px solid black;
  border-radius: 30px;
  background-color: black;
  font-size: 16px;
  margin-top: 30px;
`;

const SmallText = styled.div`
  font-size: 16px;
  font-family: sans-serif;
  width: 30%;
  font-weight: 400;
  color: white;
  line-height: 25px;
  margin-top: 15px;
  @media (min-width: 1000px) {
    background-color: #34aa45ff;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 321px) {
    width: 100%;
  }
`;
const LargeText = styled.div`
  font-size: 150px;
  font-family: "Times New Roman";
  color: white;
  width: 100%;
  @media (max-width: 500px) {
    font-size: 95px;
    width: 100%;
  }
  @media (max-width: 321px) {
    font-size: 70px;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
`;

const Cube = styled.div`
  background-image: url(${cube});
  background-size: cover;
  background-position-x: 500px;
  background-position-y: -00px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const Container = styled.div`
  width: 100%;
  background-color: #34aa45ff;
  position: relative;
`;
