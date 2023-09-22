import React from "react";
import styled from "styled-components";
import pic from "../typeset.png";
import pic1 from "../twitterl.png";
import pic2 from "../mac.png";
import pic3 from "../willet.png";
import pic4 from "../wes.png";
import pic5 from "../coding.jpg";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

const CardScreen = () => {
  return (
    <div>
      <Container>
        <Top>
          <BsGraphUpArrow style={{ marginRight: "10px" }} />
          <H4>Trending on Medium</H4>
        </Top>
        <CardHold>
          <Cards>
            <Card>
              <Num>01</Num>
              <Text>
                <IcoTex>
                  <Avatar>
                    <img src={pic} alt="" />
                  </Avatar>
                  M.G. Siegler in 500ish
                </IcoTex>
                <H4>The Too-Slick Apple Event</H4>
                <Base>Sep 21 . 7 min read</Base>
              </Text>
            </Card>
            <Card>
              <Num>02</Num>
              <Text>
                <IcoTex>
                  <Avatar>
                    <img src={pic1} alt="" />
                  </Avatar>
                  Juntao Qiu in ITNEXT
                </IcoTex>
                <H4>Why Web UI Development Is So Hard?</H4>
                <Base>Sep 9 . 24 min read</Base>
              </Text>
            </Card>
            <Card>
              <Num>03</Num>
              <Text>
                <IcoTex>
                  <Avatar>
                    <img src={pic2} alt="" />
                  </Avatar>
                  The Useful Tech in mac O'Clock
                </IcoTex>
                <H4>
                  I Tried the New AirPods Pro Features, and i Absolutely...
                </H4>
                <Base>Sep 21 . 7 min read</Base>
              </Text>
            </Card>
          </Cards>
          <Cards>
            <Card>
              <Num>04</Num>
              <Text>
                <IcoTex>
                  <Avatar>
                    <img src={pic3} alt="" />
                  </Avatar>
                  Will Lockett in Predict
                </IcoTex>
                <H4>Tesla Should be worried About Toyota</H4>
                <Base>Sep 13 . 6 min read</Base>
              </Text>
            </Card>
            <Card>
              <Num>05</Num>
              <Text>
                <IcoTex>
                  <Avatar>
                    <img src={pic4} alt="" />
                  </Avatar>
                  Wes O'Donnell
                </IcoTex>
                <H4>
                  Ukraine is Using its Leopard Tanks at Night as 'Nocturnal
                  Predators'
                </H4>
                <Base>Sep 21 . 7 min read</Base>
              </Text>
            </Card>
            <Card>
              <Num>06</Num>
              <Text>
                <IcoTex>
                  <Avatar>
                    <img src={pic5} alt="" />
                  </Avatar>
                  Victor Timi in Level Up Coding
                </IcoTex>
                <H4>
                  "Good Commit" vs "Your Commit": How to Write a Perfect Git
                  Commit...
                </H4>
                <Base>Sep 8 . 3 min read</Base>
              </Text>
            </Card>
          </Cards>
        </CardHold>
        <ArrowUp>
          <FaArrowUp />
        </ArrowUp>
      </Container>
    </div>
  );
};

export default CardScreen;
const ArrowUp = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  color: gold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  @media (min-width: 1026px) {
    width: 70px;
    height: 70px;
    font-size: 30px;
  }
`;
const Base = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
`;
const H4 = styled.h4`
  font-size: 20px;
  margin: 0;
  /* margin-bottom: 15px; */
`;
const Avatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  img {
    width: 20px;
    height: 20px;
  }
`;
const IcoTex = styled.div`
  color: black;
  font-weight: 200;
  font-size: 14px;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  height: 130px;
  width: 300px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: space-between;
`;
const Num = styled.div`
  width: 40px;
  height: 40px;
  color: grey;
  font-size: 30px;
`;
const Card = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 1px 0px 1px gray;
  margin-bottom: 15px;
  @media (min-width: 1026px) {
    width: 30%;
    padding: 15px;
    height: 130px;
    display: flex;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 1026px) {
    align-items: center;
    height: 180px;
    justify-content: space-between;
  }
`;
const CardHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  /* width: 90%; */
  min-height: 400px;
  height: 100%;
  @media (min-width: 1026px) {
    width: 95%;

    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`;
const Top = styled.div`
  width: 95%;
  margin-top: 10px;
  height: 50px;
  display: flex;
  align-items: center;
`;
const Container = styled.section`
  width: 100%;
  min-height: 40vh;
  height: 100%;
  display: flex;
  z-index: 2;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-bottom: 1px solid silver;
  position: relative;
`;
