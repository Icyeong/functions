"use client";
import Button from "react-bootstrap/Button";
import Bs_Form from "react-bootstrap/Form";
import Input from "./Input";
import Radio from "./Radio";
import UserId from "./UserId";
import Select from "./Select";
import Email from "./Email";
import Gender from "./Gender";
import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux/es/exports";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function Form() {
  const dispatch = useDispatch<AppDispatch>();
  const userIdTest = useAppSelector(
    (state) => state.authReducer.value.username
  );
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );

  const onTestFunc = (e: any) => {
    e.preventDefault();
    dispatch(logIn("변경된걸로!"));
  };

  const birth = [
    { type: "radio", title: "양력" },
    { type: "radio", title: "음력" },
  ];

  const period = [
    { type: "radio", title: "1년" },
    { type: "radio", title: "3년" },
    { type: "radio", title: "5년" },
  ];

  const options = ["test1", "test2", "test3", "test4"];

  function signup(e: any) {
    e.preventDefault();
    console.log("signup!!");
  }
  return (
    <Bs_Form className="bg-stone-200 p-3 max-w-4">
      <Input type="text" title="이름" placeholder="testUser1" readonly />
      <UserId />
      <Input
        type="password"
        title="비밀번호"
        subText="8~16자 영문대소문자,숫자,특수문자 사용가능"
      />
      <Input type="password" title="비밀번호 확인" />
      <Radio props={birth} />
      <Select options={options} />
      <Email />
      <Gender />
      <div className="flex align-items-center">
        <Input type="text" title="추천인 아이디" />
        <button
          onClick={onTestFunc}
          className="btn btn-primary max-h-10 mt-3 ml-1"
        >
          등록확인
        </button>
      </div>
      <p className="text-muted text-sm">
        - 추천인 아이디 입력 시, 대소문자 및 띄어쓰기에 유의해주시기 바랍니다.
      </p>
      <p className="text-muted text-sm mb-3">
        - 추천인 입력 시, 추천인과 신규 회원 모두 7,000원 할인 쿠폰을 드립니다.
      </p>
      <Bs_Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Bs_Form.Label>개인정보 유효기간 선택</Bs_Form.Label>
        <Radio props={period} />
      </Bs_Form.Group>

      <Button
        onClick={signup}
        className="bg-red-700"
        variant="danger"
        type="submit"
      >
        가입하기
      </Button>
    </Bs_Form>
  );
}
