import React, { useCallback } from "react";
import Form from "../form elems/Form";
import Input from "../form elems/Input";
import SubmitButton from "../form elems/SubmitButton";
import FormContainer from "../form elems/FormContainer";
import TargetLink from "../form elems/TargetLink";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("");
  return (
    <FormContainer>
      <Form>
        <Input
          id="email"
          type="text"
          labelText="Email:"
          onChange={useCallback(
            (event) => setEmail(event.target.value),
            [email]
          )}
        />

        <Input
          id="password"
          type="password"
          labelText="Password:"
          onChange={useCallback(
            (event) => setPassword(event.target.value),
            [password]
          )}
        />

        <SubmitButton innerText="Log In" />

        <TargetLink
          targetText="Need an account?"
          path="/register"
          linkText="Sign up"
        />
      </Form>
    </FormContainer>
  );
};

export default Login;
