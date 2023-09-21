import styled from "styled-components";

const Quality = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <LargeTxt>Quality over clickbait</LargeTxt>
            <SmallTxt>
              In a creator economy ruled by clickbait and ad impressions,
              Medium’s Partner Program is taking a stand for quality. As a
              partner, when your best stories are read by Medium members, a
              portion of their membership dues will be shared with you. Here are
              a few factors we consider in order to determine quality.
            </SmallTxt>
          </Left>
          <Right>
            <Texts>
              <BoldTxt>Member read time</BoldTxt>
              <Txt>
                Members-only stories will earn money when a member reads your
                story for 30 seconds or more, and will continue to earn more the
                longer they keep reading. Long, thoughtful, reads are
                encouraged!
              </Txt>
            </Texts>

            <Texts>
              <BoldTxt>Positive interactions</BoldTxt>
              <Txt>
                You’ll also earn more when members clap, highlight, reply, or
                engage with your story in other ways.
              </Txt>
            </Texts>

            <Texts>
              <BoldTxt>Follower bonus</BoldTxt>
              <Txt>
                When members follow you and continue to read and interact with
                your stories, you will be given a follower bonus. We encourage
                writers to share their stories with readers in a way that
                promotes community and audience building.
              </Txt>
            </Texts>

            <Texts>
              <BoldTxt>Boost bonus</BoldTxt>
              <Txt>
                Stories that are Boosted will also earn more for each read and
                interaction. We recommend that writers spend more time on fewer,
                high-quality stories to reach this bar.
              </Txt>
            </Texts>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Quality;

const Texts = styled.div`
  border-bottom: 1px solid #f2f2f2ff;
  width: 75%;
  padding: 30px 0px;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Txt = styled.div`
  color: grey;
  font-weight: 400;
`;

const BoldTxt = styled.div`
  font-weight: 700;
  font-family: Times New Roman;
  font-size: 18px;
  margin-bottom: 10px;
`;

const SmallTxt = styled.div`
  font-size: 25px;
  font-family: Times New Roman;
  width: 80%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LargeTxt = styled.div`
  font-family: Times New Roman;
  font-size: 90px;
  margin: 50px 0;
  @media (max-width: 320px) {
    font-size: 70px;
  }
`;

const Right = styled.div`
  width: 50%;
  margin-top: 50px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid black;
`;
