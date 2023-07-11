import Form from "./components/Form";

export default function page() {
  return (
    <>
      <h1 className="text-xl font-bold">로그인 요청</h1>
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
      <Form />
    </>
  );
}
