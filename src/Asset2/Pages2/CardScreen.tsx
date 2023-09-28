import React, { useState } from "react";
import styled from "styled-components";
import pic from "../0_ukd_ECs8LvyiuTG_.jpg";
import pic1 from "../1_qVYCB8Xw85QdWOPEKZqF_A.png";
import pic2 from "../1_qVYCB8Xw85QdWOPEKZqF_A.png";
import pic3 from "../1_Z6IM5WZmOu73LRiaJ34nyA.png";
import pic4 from "../1_o3Al2nuA1dTVtFGA8U2aIw.jpg";
import pic5 from "../0_ukd_ECs8LvyiuTG_.jpg";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const CardScreen = () => {
  const [showArrow, setShowArrow] = useState(false);

  const display = () => {
    if (window.pageYOffset > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  window.addEventListener("scroll", display);

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
        {showArrow ? (
          <Link to="top" smooth={true}>
            <ArrowUp>
              <FaArrowUp />
            </ArrowUp>
          </Link>
        ) : null}
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
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  transition: all 400ms;
  bottom: 15px;
  right: 15px;
  position: fixed;
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
  height: 110px;
  width: 300px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: space-between;
`;
const Num = styled.div`
  color: #f2f2f2;
  font-size: 30px;
  width: 40px;
  display: flex;
  align-items: start;
`;
const Card = styled.div`
  // background-color: white;
  margin-bottom: 15px;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
const CardHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  min-height: 400px;
  height: 100%;
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
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid silver;
  position: relative;
`;
