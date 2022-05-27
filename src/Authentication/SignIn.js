import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignIn() {
  return (
    <div style={styles}>
      <div>
        <h3>Log In</h3>
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
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
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
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
