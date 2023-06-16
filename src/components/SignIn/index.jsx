import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  TextWrapper,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for" required>
                Email
              </FormLabel>
              <FormInput type="email" />
              <FormLabel htmlFor="for" required>
                Password
              </FormLabel>
              <FormInput type="password" />
              <FormButton type="submit">Continue</FormButton>
              <TextWrapper>
              <Text>Forgot password</Text>
              <Text to="/signup">Sign Up</Text>
              </TextWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
