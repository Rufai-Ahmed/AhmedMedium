import styled from "styled-components";
import { useState } from "react";

interface iPic {
  Img: any;
  //   Button: any;
}

const Signup: React.FC<iPic> = ({ Img }) => {
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const Upload = (e: any) => {
    const file = e.target.files?.[0];
    setImage(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  return (
    <div>
      <Container>
        <Text>Please upload a profile picture to continue</Text>
        <ImageHolder>
          <Img src={previewImage} />
        </ImageHolder>
        <Button htmlFor="up">Upload</Button>
        <input
          type="file"
          id="up"
          style={{ display: "none" }}
          onChange={Upload}
        />
      </Container>
    </div>
  );
};

export default Signup;

const Text = styled.div`
  font-size: 50px;
  font-family: Times New Roman;
`;

const Button = styled.label`
  padding: 15px 30px;
  background-color: black;
  color: white;
  border-radius: 30px;
  font-family: Times New Roman;
`;

const Img = styled.img`
  background-color: white;
  width: 100%;
  height: 100%;
  display: none;
`;

const ImageHolder = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
