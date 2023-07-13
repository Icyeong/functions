import Bs_Form from "react-bootstrap/Form";
import Radio from "./Radio";

export default function Gender() {
  const gender = [
    { type: "radio", title: "정보제공 안함" },
    { type: "radio", title: "남성" },
    { type: "radio", title: "여성" },
  ];
  return (
    <Bs_Form.Group className="mb-3" controlId="formBasicEmail">
      <Bs_Form.Label>성별(선택)</Bs_Form.Label>
      <Radio props={gender} />
    </Bs_Form.Group>
  );
}
