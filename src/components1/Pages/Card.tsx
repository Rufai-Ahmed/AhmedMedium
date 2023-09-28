import styled from "styled-components";
import pix1 from "../../assets1/LF.svg";

const Card = () => {
  return (
    <div>
      <Container>
        <Top>
          <span>
            Take Your Mind
            <br /> In New Direction
          </span>
        </Top>
        {/* <Middle></Middle> */}
        <Bottom>
          {/* <Left src={pix} alt=""></Left> */}
          <Middle>Get Unlimitted Access</Middle>
          <Right src={pix1} alt=""></Right>
        </Bottom>
      </Container>
    </div>
  );
};

export default Card;
const Left = styled.img`
  width: 100%;
`;
const Right = styled.img`
  width: 100%;
`;
const Middle = styled.div`
  width: 170px;
  padding: 10px 18px;
  border-radius: 18px;
  background-color: black;
  color: white;
  @media (max-width: 500px) {
    font-size: 14px;
    width: 140px;
  }
`;
const Bottom = styled.div`
  height: 210px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 500px) {
    height: 120px;
  }
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    text-align: center;
    font-size: 80px;
  }
  @media (max-width: 500px) {
    span {
      font-size: 25px;
    }
  }
`;
const Container = styled.div`
  height: 520px;
  width: 100%;
  background-color: #bcdfff;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  @media (max-width: 500px) {
    height: 210px;
  }
`;
