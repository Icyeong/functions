import Bs_Form from "react-bootstrap/Form";

type Props = {
  type: string;
  title: string;
  placeholder?: string;
  subText?: string;
  readonly?: boolean;
};

export default function Input({
  type,
  title,
  placeholder,
  subText,
  readonly,
}: Props) {
  return (
    <Bs_Form.Group className="mb-3" controlId="formBasicEmail">
      <Bs_Form.Label>{title}</Bs_Form.Label>
      <Bs_Form.Control
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
      />
      <Bs_Form.Text className="text-muted">{subText}</Bs_Form.Text>
    </Bs_Form.Group>
  );
}
