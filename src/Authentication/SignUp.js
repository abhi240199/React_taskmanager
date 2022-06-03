import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleInput(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "confirm_password") {
      setConfirmPassword(e.target.value);
    }
  }
  function handleSubmit() {
    console.log(username, password);
    if (confirmPassword === password && email !== "" && username !== "") {
      localStorage.setItem(email, password);
      localStorage.setItem("uname", username);
    }
  }
  return (
    <div style={styles}>
      {console.log(username, email, password, confirmPassword)}
      <div>
        <h3>Create an Account</h3>
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="username"
              onChange={handleInput}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              onChange={handleInput}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            SignUp
          </Button>
        </Form>
      </div>
    </div>
  );
}
const styles = {
  display: "flex",
  flexDirection: "column",
  alignItem: "center",
  justifyContent: "center",
  height: "50%",
  width: "30%",
  marginLeft: "35%",
  marginTop: "50px",
  marginBottom: "50px",
};
