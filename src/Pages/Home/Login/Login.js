import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const { providerLogin, signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Container>
        <div>Login Now</div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <>
          <Button
            onClick={handleGoogleSignIn}
            className="mt-4"
            variant="success"
            type="submit"
          >
            Google signIn
          </Button>
          <div className="ml-4">
            <Link to="/register">Regiter Here</Link>
          </div>
        </>
      </Container>
    </div>
  );
};

export default Login;
