"use client";
import { useRef } from "react";
import InicisPayment from "./components/InicisPayment";
import KakaoPayment from "./components/KakaoPayment";
import NaverPayment from "./components/NaverPayment";
import PaycoPayment from "./components/PaycoPayment";

export default function Page() {
  const iframeBox = useRef<HTMLDivElement | null>(null);
  const iframe = useRef<HTMLIFrameElement | null>(null);

  window.addEventListener("message", function (event) {
    const message = event.data;

    console.log("부모창에서 event : ", event);
    console.log("전달받은 데이터 : ", message);
    if (iframe.current && iframeBox.current?.contains(iframe.current)) {
      iframeBox.current?.removeChild(iframe.current);
    }
    if (message.resultCode === "0000") {
      //Fail
      alert(message.resultMsg);
    } else if (message.resultCode === "1111") {
      //Success
      alert(message.resultMsg);
    } else if (message.resultCode === "2222") {
      //Cancel
      alert(message.resultMsg);
    }
  });
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
        <InicisPayment iframeBox={iframeBox} iframe={iframe} />
        <NaverPayment iframeBox={iframeBox} iframe={iframe} />
        <KakaoPayment iframeBox={iframeBox} iframe={iframe} />
        <PaycoPayment iframeBox={iframeBox} iframe={iframe} />
      </div>

      <div ref={iframeBox} id="iframeBox"></div>
    </>
  );
}
