import Bs_Form from "react-bootstrap/Form";
import Select from "./Select";

export default function Email() {
  const options = [
    "네이버",
    "한메일",
    "지메일",
    "핫메일",
    "네이트",
    "직접입력",
  ];

  return (
    <Bs_Form.Group className="mb-5" controlId="formBasicEmail">
      <Bs_Form.Label>이메일</Bs_Form.Label>
      <div className="flex align-items-center">
        <div className="w-2/4 mr-1">
          <Bs_Form.Control type="text" />
          <Bs_Form.Text className="text-red-500 absolute">
            *메일을 인증해 주세요.
          </Bs_Form.Text>
        </div>
        @
        <Bs_Form.Control type="text" className="w-2/4 ml-1" />
        <Select options={options} />
        <button className="btn btn-primary w-2/4 ml-1">인증발송</button>
      </div>
    </Bs_Form.Group>
  );
}
