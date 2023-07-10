"use client";

import Button from "react-bootstrap/Button";

export default function page() {
  return (
    <>
      <h1 className="text-xl font-bold">본인인증</h1>
      <h2 className="text-lg font-bold mt-4">휴대전화 인증</h2>
      <ol className="list-decimal pl-7 pt-2">
        <li>아이디 비밀번호 이메일 유효성 검증</li>
        <li>서버 통신</li>
        <li>에러에 따른 핸들링</li>
      </ol>
      <Button className="bg-blue-700 m-3" variant="primary">
        Primary
      </Button>
      <h2 className="text-lg font-bold mt-4">아이핀 인증</h2>
      <ol className="list-decimal pl-7 pt-2">
        <li>아이디 비밀번호 이메일 유효성 검증</li>
        <li>서버 통신</li>
        <li>에러에 따른 핸들링</li>
      </ol>
      <Button className="bg-blue-700 m-3" variant="primary">
        Primary
      </Button>
    </>
  );
}
