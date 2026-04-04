import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserPhone({
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
          d="M9 7.25C10.519 7.25 11.75 6.019 11.75 4.5C11.75 2.981 10.519 1.75 9 1.75C7.481 1.75 6.25 2.981 6.25 4.5C6.25 6.019 7.481 7.25 9 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.83922 9.8738C5.79882 10.2571 4.10861 11.622 3.29001 13.471C2.92501 14.296 3.37701 15.245 4.23702 15.516C5.46202 15.902 7.08301 16.25 8.99901 16.25C9.34851 16.25 9.68451 16.2355 10.0111 16.2119"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.416 12.905L13.02 11.523C13.197 11.381 13.257 11.137 13.165 10.93L12.806 10.048C12.707 9.82399 12.46 9.70599 12.223 9.76699L11.112 10.132C10.898 10.202 10.747 10.409 10.761 10.634C10.951 13.643 13.357 16.049 16.366 16.239C16.591 16.253 16.798 16.103 16.868 15.888L17.233 14.777C17.294 14.54 17.176 14.294 16.952 14.194L16.07 13.835C15.862 13.743 15.619 13.802 15.477 13.98L14.095 15.584"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11.416 12.905L13.02 11.523C13.197 11.381 13.257 11.137 13.165 10.93L12.806 10.048C12.707 9.82399 12.46 9.70599 12.223 9.76699L11.112 10.132C10.898 10.202 10.747 10.409 10.761 10.634C10.951 13.643 13.357 16.049 16.366 16.239C16.591 16.253 16.798 16.103 16.868 15.888L17.233 14.777C17.294 14.54 17.176 14.294 16.952 14.194L16.07 13.835C15.862 13.743 15.619 13.802 15.477 13.98L14.095 15.584"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserPhone;
