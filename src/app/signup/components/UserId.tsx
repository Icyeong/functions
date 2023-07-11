import Input from "./Input";

export default function UserId() {
  return (
    <div className="flex align-items-center">
      <Input type="text" title="아이디" />
      <button className="btn btn-primary max-h-10 mt-3 ml-1">중복확인</button>
    </div>
  );
}
