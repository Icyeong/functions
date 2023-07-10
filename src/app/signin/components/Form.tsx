"use client";
import Button from "react-bootstrap/Button";
import Bs_Form from "react-bootstrap/Form";

export default function Form() {
  return (
    <Bs_Form>
      <Bs_Form.Group className="mb-3" controlId="formBasicEmail">
        <Bs_Form.Label>Email address</Bs_Form.Label>
        <Bs_Form.Control type="email" placeholder="Enter email" />
        <Bs_Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Bs_Form.Text>
      </Bs_Form.Group>

      <Bs_Form.Group className="mb-3" controlId="formBasicPassword">
        <Bs_Form.Label>Password</Bs_Form.Label>
        <Bs_Form.Control type="password" placeholder="Password" />
      </Bs_Form.Group>
      <Bs_Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Bs_Form.Check type="checkbox" label="Check me out" />
      </Bs_Form.Group>
      <Button className="bg-blue-700 m-3" variant="primary" type="submit">
        Submit
      </Button>
    </Bs_Form>
  );
}
