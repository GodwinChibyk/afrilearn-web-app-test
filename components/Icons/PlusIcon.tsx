import React from "react";

export const PlusIcon = ({
  className,
  color = "white",
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.1667 9.16667H10.8333V0.833333C10.8333 0.61232 10.7455 0.400358 10.5893 0.244078C10.433 0.0877974 10.221 0 10 0C9.77899 0 9.56702 0.0877974 9.41074 0.244078C9.25446 0.400358 9.16667 0.61232 9.16667 0.833333V9.16667H0.833333C0.61232 9.16667 0.400358 9.25446 0.244078 9.41074C0.0877974 9.56702 0 9.77899 0 10C0 10.221 0.0877974 10.433 0.244078 10.5893C0.400358 10.7455 0.61232 10.8333 0.833333 10.8333H9.16667V19.1667C9.16667 19.3877 9.25446 19.5996 9.41074 19.7559C9.56702 19.9122 9.77899 20 10 20C10.221 20 10.433 19.9122 10.5893 19.7559C10.7455 19.5996 10.8333 19.3877 10.8333 19.1667V10.8333H19.1667C19.3877 10.8333 19.5996 10.7455 19.7559 10.5893C19.9122 10.433 20 10.221 20 10C20 9.77899 19.9122 9.56702 19.7559 9.41074C19.5996 9.25446 19.3877 9.16667 19.1667 9.16667Z"
        fill={color}
      />
    </svg>
  );
};
