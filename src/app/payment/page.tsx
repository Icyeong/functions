"use client";
// import Button from "react-bootstrap/Button";
import { inicispay, kakaopay, naverpay } from "../lib/payments";
import Inicis from "./components/InicisNpm";
import InicisPayment from "./components/InicisPayment";

export default function page() {
  return (
    <>
      <h1 className="text-xl font-bold">결제</h1>
      <h2 className="text-lg font-bold mt-4">구현 기능</h2>
      <ol className="list-decimal pl-7 pt-2">
        <li>아이디 비밀번호 이메일 유효성 검증</li>
        <li>서버 통신</li>
        <li>에러에 따른 핸들링</li>
      </ol>
      <h2 className="text-lg font-bold mt-4">통신</h2>
      <ol className=" pl-7 p-3 bg-stone-200">
        <li>POST</li>
        <li>http://localhost:8080</li>
        <li> title: string</li>
      </ol>
      <h2 className="text-lg font-bold mt-4">테스트 가능</h2>

      <div className="flex">
        <InicisPayment />
        <button onClick={inicispay} className="btn btn-primary mx-1">
          이니시스 결제
        </button>
        <button onClick={naverpay} className="btn btn-primary mx-1">
          네이버페이
        </button>
        <button onClick={kakaopay} className="btn btn-primary mx-1">
          카카오페이
        </button>
      </div>
    </>
  );
}
