import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormGroups,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  TextWrapper,
  Text,
} from "./SignUpElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign up for an account</FormH1>
              <FormGroups>
                <formGroup>
                  <FormLabel htmlFor="firstname" required>
                    FirstName
                  </FormLabel>
                  <FormInput type="text" />
                </formGroup>
                <FormGroup>
                  <FormLabel htmlFor="lastname" required>
                    LastName
                  </FormLabel>
                  <FormInput type="text" />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="for" required>
                    Email
                  </FormLabel>
                  <FormInput type="email" />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="for" required>
                    Password
                  </FormLabel>
                  <FormInput type="password" />
                </FormGroup>
              </FormGroups>
              <FormButton type="submit" to="/dashboard">Continue</FormButton>
              <TextWrapper>
                <Text>Forgot password</Text>
                <Text to="/signin">Sign In</Text>
              </TextWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
