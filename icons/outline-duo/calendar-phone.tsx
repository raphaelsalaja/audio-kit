import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarPhone({
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
          d="M2.25 4.75C2.25 3.64543 3.14543 2.75 4.25 2.75H13.75C14.8546 2.75 15.75 3.64543 15.75 4.75V6.25H2.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 6.25H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.416 12.905L12.02 11.523C12.197 11.381 12.257 11.137 12.165 10.93L11.806 10.048C11.707 9.82401 11.46 9.70601 11.223 9.76701L10.112 10.132C9.89797 10.202 9.74697 10.409 9.76097 10.634C9.95097 13.643 12.357 16.049 15.366 16.239C15.591 16.253 15.798 16.103 15.868 15.888L16.233 14.777C16.294 14.54 16.176 14.294 15.952 14.194L15.07 13.835C14.862 13.743 14.619 13.802 14.477 13.98L13.095 15.584"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.416 12.905L12.02 11.523C12.197 11.381 12.257 11.137 12.165 10.93L11.806 10.048C11.707 9.82401 11.46 9.70601 11.223 9.76701L10.112 10.132C9.89797 10.202 9.74697 10.409 9.76097 10.634C9.95097 13.643 12.357 16.049 15.366 16.239C15.591 16.253 15.798 16.103 15.868 15.888L16.233 14.777C16.294 14.54 16.176 14.294 15.952 14.194L15.07 13.835C14.862 13.743 14.619 13.802 14.477 13.98L13.095 15.584"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 10.9053V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H8.27499"
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

export default CalendarPhone;
