export const InfoIcon = ({
  className,
  color = "#374258",
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
      <g clipPath="url(#clip0_292_577)">
        <path
          d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.34591 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM10 18.3333C8.35183 18.3333 6.74066 17.8446 5.37025 16.9289C3.99984 16.0132 2.93174 14.7117 2.30101 13.189C1.67028 11.6663 1.50525 9.99076 1.82679 8.37425C2.14834 6.75774 2.94201 5.27288 4.10745 4.10744C5.27289 2.94201 6.75774 2.14833 8.37425 1.82679C9.99076 1.50525 11.6663 1.67027 13.189 2.301C14.7118 2.93173 16.0132 3.99984 16.9289 5.37025C17.8446 6.74066 18.3333 8.35182 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333Z"
          fill={color}
        />
        <path
          d="M10 8.3335H9.16666C8.94565 8.3335 8.73369 8.42129 8.57741 8.57757C8.42113 8.73385 8.33333 8.94582 8.33333 9.16683C8.33333 9.38784 8.42113 9.5998 8.57741 9.75608C8.73369 9.91237 8.94565 10.0002 9.16666 10.0002H10V15.0002C10 15.2212 10.0878 15.4331 10.2441 15.5894C10.4004 15.7457 10.6123 15.8335 10.8333 15.8335C11.0543 15.8335 11.2663 15.7457 11.4226 15.5894C11.5789 15.4331 11.6667 15.2212 11.6667 15.0002V10.0002C11.6667 9.55814 11.4911 9.13421 11.1785 8.82165C10.8659 8.50909 10.442 8.3335 10 8.3335Z"
          fill={color}
        />
        <path
          d="M10 6.6665C10.6904 6.6665 11.25 6.10686 11.25 5.4165C11.25 4.72615 10.6904 4.1665 10 4.1665C9.30964 4.1665 8.75 4.72615 8.75 5.4165C8.75 6.10686 9.30964 6.6665 10 6.6665Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_292_577">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
