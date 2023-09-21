import styled from "styled-components";

const Eligibility = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <LargeTxt>
              Eligibility <br /> criteria
            </LargeTxt>
          </Left>
          <Right>
            <Texts>
              <BoldTxt>You’re a member.</BoldTxt>
              <Txt>
                The best way to succeed as a Partner Program author is to also
                participate as a reader of stories on Medium.
              </Txt>
            </Texts>

            <Texts>
              <BoldTxt>You’ve published a story in the last 6 months.</BoldTxt>
              <Txt>
                Staying active, publishing regularly, and being engaged with the
                community are important ways to help our platform flourish.
              </Txt>
            </Texts>

            <Texts>
              <BoldTxt>You’re located in an eligible country.</BoldTxt>
              <Txt>
                We recently expanded the number of supported countries, so now
                more people than ever are able to join the Partner Program.
              </Txt>
            </Texts>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Eligibility;

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

const LargeTxt = styled.div`
  font-family: Times New Roman;
  font-size: 90px;
  margin: 50px 0;
  @media (max-width: 500px) {
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
