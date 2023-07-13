import Form from "react-bootstrap/Form";

type Props = {
  options: string[];
};

export default function Select({ options }: Props) {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </Form.Select>
  );
}
