import Bs_Form from "react-bootstrap/Form";

type Props = {
  props: { type: string; title: string }[];
};

export default function Input({ props }: Props) {
  return (
    <div className="mb-3">
      {props.length > 0 &&
        props.map((el, idx) => (
          <Bs_Form.Check
            key={idx}
            inline
            label={el.title}
            name="group"
            type="radio"
            id={`inline-${el.type}-${idx}`}
          />
        ))}
    </div>
  );
}
