
import { cn } from "@/base/funcs/cn";
import React, { MouseEventHandler, ReactNode } from "react";

export const Button = ({
  className,
  title,
  onClick,
  titleClassName,
  children,
}: {
  className?: string;
  titleClassName?: string;
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}) => {
  return (
    <button onClick={onClick} className={cn(`flex flex-row items-center justify-center bg-primaryColor rounded-lg ${className}`)}>
      {children}
      <p className={cn(`text-whiteColor text-base ${titleClassName}`)}>{title}</p>
    </button>
  );
};
