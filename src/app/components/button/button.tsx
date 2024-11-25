import { ButtonProps } from "./button.types";

export default function ButtonBtn({
  label,
  px,
  py,
  onClick,
  bgColor,
  fontSize,
  bold,
  rounded,
}: ButtonProps) {
  return (
    <button onClick={onClick} style={{}} className={`px-[${px}] py-[${py}]`}>
      {label}
    </button>
  );
}
