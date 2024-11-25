export interface ButtonProps {
  label: string;
  px: string;
  py: string;
  onClick?: () => void;
  bgColor?: "followedText | transparent";
  fontSize?: string;
  bold?: "thin | extralight | light | normal | medium | semibold | bold | extrabold | black ";
  rounded?: string;
}
