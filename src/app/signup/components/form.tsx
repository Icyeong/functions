"use client";
import Button from "react-bootstrap/Button";
import Bs_Form from "react-bootstrap/Form";
import Input from "./Input";

export default function Form() {
  return (
    <Bs_Form>
      <Input type="text" title="이름" placeholder="testUser1" readonly />
      <Input type="text" title="아이디" />
      <Input
        type="password"
        title="비밀번호"
        subText="8~16자 영문대소문자,숫자,특수문자 사용가능"
      />
      <Input type="password" title="비밀번호 확인" />
      <Bs_Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Bs_Form.Check type="checkbox" label="Check me out" />
      </Bs_Form.Group>
      <Button className="bg-blue-700 m-3" variant="primary" type="submit">
        Submit
      </Button>
      ㅣ
    </Bs_Form>
  );
}
