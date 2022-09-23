import React from "react";
import styled from "styled-components";
import register from "../img/register2.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image:  linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${register});
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="User Name"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm Password"></Input>

          <ButtonContainer>
            <Agreement>
              I completly agree with all terms and condition{" "}
            </Agreement>
            <Button> CREATE </Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
