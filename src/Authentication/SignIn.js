import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [msg, setMessage] = useState("Please Sign In");

  function handleInput(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let user = await axios.post("http://localhost:8000/user/create-session", {
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
  };
  // const username = localStorage.getItem("uname");
  return (
    <div style={styles}>
      <div>
        <h3>Log In</h3>
      </div>
      {/* <b>{username}Already login</b> */}
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            name="password"
          >
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </Form>
      </div>
      <br></br>
      {msg}
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
