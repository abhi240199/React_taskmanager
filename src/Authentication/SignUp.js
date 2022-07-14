import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [msg, setMessage] = useState("Please Sign Up");

  const navigate = useNavigate();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword === password && email !== "" && username !== "") {
      try {
        let user = await axios.post("http://localhost:8000/user/create", {
          name: username,
          email: email,
          password: password,
        });
        console.log(user);
        if (user.data.status === true) {
          setFlag(true);
          setMessage(user.data.msg);
        } else {
          setMessage(user.data.msg);
        }
      } catch (err) {
        console.log("error is as", err);
      }
    }
  };
  return (
    <div style={styles}>
      {/* {console.log(username, email, password, confirmPassword)} */}
      <div>
        <h3>Create an Account</h3>
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="username"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3">
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
      <br></br>
      {msg}
      {/* {!flag ? msg : msg} */}
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
