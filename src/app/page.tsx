"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import User from "./[pageId]/page";

export default function Home() {
  const [Theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(sessionStorage.getItem("theme") ?? "dark");
  }, []);
  return (
    <div
      className={`bg-${
        Theme === "dark" ? "primary" : "secondary"
      } w-[100vw] h-[100vh]`}
    >
      <User />
    </div>
  );
}
