import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import M from "../../Asset/Medium.MP4";

const Hero = () => {
  const [color, setColor] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setColor((el) => el + 2);
    }, 5000);
  }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <H1>Stay Curious.</H1>
            <H4>
              Discover Stories, thinking, and expertise from writers on any
              topic.
            </H4>
            <Button1>Start Reading</Button1>
          </Left>
          <Right>
            <Vid src={M} autoPlay loop />
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Vid = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  @media (max-width: 700px) {
    display: none;
  }
`;

const H3 = styled.h3`
  font-size: 20px;
  color: black;
  text-align: center;
  margin: 0;
  text-shadow: 5px 0px 2px 0px "#858585";
`;
const Letter = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
const Right = styled.section`
  //   margin-top: 30px;
  width: 100%;
  height: 100%;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Button1 = styled.button`
  width: 150px;
  height: 50px;
  background-color: black;
  margin-top: 45px;
  border: none;
  color: white;
  border-radius: 50px;
  font-size: 16px;
`;
const H4 = styled.h4`
  font-size: 24px;
  color: black;
  font-weight: 400;
  line-height: 30px;
  margin: 0;
`;
const H1 = styled.h1`
  font-size: 60px;
  margin: 20px 0;
  color: black;
  font-weight: 700;
  @media (min-width: 1026px) {
    font-size: 75px;
  }
`;
const Left = styled.section`
  width: 70%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Wrapper = styled.main`
  width: 90%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  justify-content: center;
`;
const Container = styled.section`
  width: 100%;
  min-height: calc(75vh - 70px);
  height: 100%;
  background-color: #f9ba11;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
`;
