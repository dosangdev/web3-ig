import cn from "classnames";

interface ButtonProps {
  label?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  onClick?: () => void;
}

const variants = {
  // 배경색, 텍스트 색, hover
  profileImageButton: "",
  userName: "",
  editProfileButton: "bg-followText rounded-md hover:bg-followHover",
  settingsIconButton: "bg-transparent",
  followersButton: "bg-transparent",
  threadsUsernameButton: "bg-transparent",
  addStoryButton: "bg-transparent",
  postsTabButton: "bg-transparent",
  footerButton: "bg-transparent",
};

const sizes = {
  // 텍스트 크기, 패딩
  profileImageButton: "",
  userName: "text-xl",
  editProfileButton: "px-4",
  settingsIconButton: "",
  followersButton: "text-lg font-medium",
  threadsUsernameButton: "",
  addStoryButton: "",
  postsTabButton: "",
  footerButton: "",
};

export default function Button({ label, variant, size, onClick }: ButtonProps) {
  const baseStyles =
    "text-sm text-primaryText font-semibold bg-followText rounded-md hover:bg-followHover px-4 py-1"; // 공통 스타일

  return <button className={cn(baseStyles)}>{label}</button>;
}

// import React from "react";

// interface ButtonProps {
//     label: string; // 버튼에 표시할 텍스트
//     onClick?: () => void; // 클릭 이벤트 핸들러
//     variant?: "primary" | "secondary" | "alert"; // 버튼 스타일 타입
//     size?: "small" | "medium" | "large"; // 버튼 크기
//   }

//   export default function ButtonBtn({
//     label,
//     onClick,
//     variant = "primary", // 기본값
//     size = "medium", // 기본값
//   }: ButtonProps) {
//     // Tailwind 스타일 매핑
//     const baseStyles = "rounded px-4 py-2 font-bold focus:outline-none focus:ring";
//     const variantStyles = {
//       primary: "bg-blue-500 text-white hover:bg-blue-600",
//       secondary: "bg-gray-500 text-white hover:bg-gray-600",
//       alert: "bg-red-500 text-white hover:bg-red-600",
//     };
//     const sizeStyles = {
//       small: "text-sm py-1 px-2",
//       medium: "text-md py-2 px-4",
//       large: "text-lg py-3 px-6",
//     };

//     return (
//       <button
//         onClick={onClick}
//         className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
//       >
//         {label}
//       </button>
//     );
//   }
