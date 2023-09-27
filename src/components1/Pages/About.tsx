import styled from "styled-components";
import Header from "../../Block/Header";
import dot from "../../Asset/dots.webp";
import { FaAngleDown, FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../../Block/Footer";

const About = () => {
  return (
    <div>
      <Header bcc="" logo="" brd="" />
      <Container>
        <Left>
          <LargeTxt>Everyone has a story to tell.</LargeTxt>
          <SmallTxt>
            Medium is a home for human stories and ideas. Here, anyone can share
            insightful perspectives, useful knowledge, and life wisdom with the
            world—without building a mailing list or a following first. The
            internet is noisy and chaotic; Medium is quiet yet full of insight.
            It’s simple, beautiful, collaborative, and helps you find the right
            audience for whatever you have to say.
          </SmallTxt>
          <SmallTxt>
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, we’re building a
            system that rewards depth, nuance, and time well spent. A space for
            thoughtful conversation more than drive-by takes, and substance over
            packaging.
          </SmallTxt>
          <SmallTxt>
            <span>
              Ultimately, our goal is to deepen our collective understanding of
              the world through the power of writing.
            </span>
          </SmallTxt>
          <SmallTxt>
            Over 100 million people connect and share their wisdom on Medium
            every month. Many are professional writers, but just as many
            aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur
            novelists, and anyone burning with a story they need to get out into
            the world. They write about what they’re working on, what’s keeping
            them up at night, what they’ve lived through, and what they’ve
            learned that the rest of us might want to know too.
          </SmallTxt>
          <SmallTxt>
            Instead of selling ads or selling your data, we’re supported by a
            growing community of Medium members who align with our mission. If
            you’re new here, start exploring. Dive deeper into whatever matters
            to you. Find a post that helps you learn something new, or
            reconsider something familiar—and then share your own story.
          </SmallTxt>
        </Left>
        <Right></Right>
      </Container>
      <Container1>
        <Wrapper>
          <Text>Start reading</Text>
          <Icon>
            <FaLongArrowAltRight />
          </Icon>
        </Wrapper>
      </Container1>
      <Container1>
        <Wrapper>
          <Text>Start writing</Text>
          <Icon>
            <FaLongArrowAltRight />
          </Icon>
        </Wrapper>
      </Container1>
      <Container1>
        <Wrapper>
          <Text>Become a member</Text>
          <Icon>
            <FaLongArrowAltRight />
          </Icon>
        </Wrapper>
      </Container1>
      <Footer />
    </div>
  );
};

export default About;

const SmallTxt = styled.div`
  font-size: 22px;
  color: white;
  font-family: New Times Roman;
  margin: 40px 0;
  span {
    font-size: 30px;
    font-family: sans-serif;
    background-color: #505050;
    font-weight: 200;
  }
`;

const LargeTxt = styled.div`
  font-size: 85px;
  font-family: New Times Roman;
  color: white;
  line-height: 80px;
`;

const Right = styled.div`
  width: 47%;
  background-color: #242424;
  height: calc(100vh - 80px);
  @media (max-width: 500px) {
    display: none;
  }
`;
const Left = styled.div`
  width: 47%;
  background-color: #242424;
  padding: 50px 0;
  z-index: 30;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${dot});
  background-size: contain;
  display: flex;
  justify-content: center;
  background-color: #242424;
  border-bottom: 1px solid white;
`;

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

const Container1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  transition: all 600ms;
  background-color: #242424;
  color: white;
  border-bottom: 1px solid white;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;
