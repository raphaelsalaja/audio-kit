import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallCrystal({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M12.4191 5.54485L11.8677 5.36102C11.0528 5.08939 10.5 4.32634 10.5 3.464C10.5 3.17538 10.5619 2.89789 10.6748 2.64622C10.7884 2.39305 9.14083 2.30052 9 2.30052C5.54822 2.30052 2.75 5.09874 2.75 8.55052C2.75 10.4237 3.57409 12.1045 4.87951 13.25H13.1205C14.4259 12.1045 15.25 10.4237 15.25 8.55052C15.25 8.39852 15.3098 7.3159 15.0318 7.39246C14.8619 7.43921 14.6838 7.464 14.501 7.464C13.6422 7.464 12.8757 6.91458 12.603 6.09634L12.4191 5.54485Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.061 13.25L13.98 15.566C14.11 15.894 13.868 16.25 13.515 16.25H4.487C4.134 16.25 3.892 15.894 4.022 15.566L4.94 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.745 8.49101L10.799 8.17601L10.483 7.22901C10.381 6.92301 9.87399 6.92301 9.77199 7.22901L9.45599 8.17601L8.50999 8.49101C8.35699 8.54201 8.25299 8.68501 8.25299 8.84701C8.25299 9.00901 8.35699 9.15201 8.50999 9.20301L9.45599 9.51801L9.77199 10.465C9.82299 10.618 9.96599 10.721 10.127 10.721C10.288 10.721 10.432 10.617 10.482 10.465L10.798 9.51801L11.744 9.20301C11.897 9.15201 12.001 9.00901 12.001 8.84701C12.001 8.68501 11.898 8.54201 11.745 8.49101Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75098 2.5C3.16518 2.5 3.50098 2.1642 3.50098 1.75C3.50098 1.3358 3.16518 1 2.75098 1C2.33678 1 2.00098 1.3358 2.00098 1.75C2.00098 2.1642 2.33678 2.5 2.75098 2.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.66 2.99L15.397 2.569L14.976 1.306C14.839 0.898 14.164 0.898 14.027 1.306L13.606 2.569L12.343 2.99C12.139 3.058 12.001 3.249 12.001 3.464C12.001 3.679 12.139 3.87 12.343 3.938L13.606 4.359L14.027 5.622C14.095 5.826 14.287 5.964 14.502 5.964C14.717 5.964 14.908 5.826 14.977 5.622L15.398 4.359L16.661 3.938C16.865 3.87 17.003 3.679 17.003 3.464C17.003 3.249 16.864 3.058 16.66 2.99Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.99368 2.3339C9.67048 2.28 9.33958 2.25 9.00098 2.25C5.54898 2.25 2.75098 5.048 2.75098 8.5C2.75098 10.401 3.59998 12.104 4.93898 13.25H13.062C14.402 12.104 15.251 10.401 15.251 8.5C15.251 8.3701 15.2457 8.2416 15.2364 8.1143"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 8.5C5.75 6.708 7.208 5.25 9 5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BallCrystal;
