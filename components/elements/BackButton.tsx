import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

type BackButtonProps = {
    className?: string
    title? : string
    [propName: string]: string | undefined
  }

function BackButton({ className = '', title = 'Back', ...others }: BackButtonProps) {
  return (
    <Link href={"/"} className={`flex items-center gap-2 ${className}`}>
      <FaLongArrowAltLeft />
      <span>{title}</span>
    </Link>
  );
}

export default BackButton;
