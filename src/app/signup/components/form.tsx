"use client";
import Button from "react-bootstrap/Button";
import Bs_Form from "react-bootstrap/Form";
import Input from "./Input";
import Radio from "./Radio";
import UserId from "./UserId";

export default function Form() {
  const radios = [
    { type: "radio", title: "양력" },
    { type: "radio", title: "음력" },
  ];
  return (
    <Bs_Form className="bg-stone-200 p-3">
      <Input type="text" title="이름" placeholder="testUser1" readonly />
      <UserId />
      <Input
        type="password"
        title="비밀번호"
        subText="8~16자 영문대소문자,숫자,특수문자 사용가능"
      />
      <Input type="password" title="비밀번호 확인" />
      <Radio props={radios} />
      <Bs_Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Bs_Form.Check type="checkbox" label="Check me out" />
      </Bs_Form.Group>
      <Button className="bg-blue-700 m-3" variant="primary" type="submit">
        Submit
      </Button>
    </Bs_Form>
  );
}
