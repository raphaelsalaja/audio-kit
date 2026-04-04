import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersDots({
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
          d="M12 7C13.2427 7 14.25 5.99264 14.25 4.75C14.25 3.50736 13.2427 2.5 12 2.5C11.8593 2.5 10.8991 2.45953 11.0836 2.85674C11.3508 3.43223 11.5 4.07369 11.5 4.75C11.5 5.43438 11.3472 6.08308 11.0739 6.66384C10.9614 6.90292 11.9058 7 12 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7 7C8.24264 7 9.25 5.99264 9.25 4.75C9.25 3.50736 8.24264 2.5 7 2.5C5.75736 2.5 4.75 3.50736 4.75 4.75C4.75 5.99264 5.75736 7 7 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 7C8.24264 7 9.25 5.99264 9.25 4.75C9.25 3.50736 8.24264 2.5 7 2.5C5.75736 2.5 4.75 3.50736 4.75 4.75C4.75 5.99264 5.75736 7 7 7Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 15C12.449 15 12 14.552 12 14C12 13.448 12.449 13 13 13C13.551 13 14 13.448 14 14C14 14.552 13.551 15 13 15Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10 15C9.449 15 9 14.552 9 14C9 13.448 9.449 13 10 13C10.551 13 11 13.448 11 14C11 14.552 10.551 15 10 15Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16 15C15.449 15 15 14.552 15 14C15 13.448 15.449 13 16 13C16.551 13 17 13.448 17 14C17 14.552 16.551 15 16 15Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.5477 10.8225C9.5915 10.0034 8.35891 9.50049 7.00001 9.50049C4.85501 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.122 14.2773 2.96 14.5684C3.991 14.9266 5.36801 15.2515 7.00001 15.2515"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.97559C11.824 6.98659 11.9101 7.00049 12 7.00049C13.243 7.00049 14.25 5.99339 14.25 4.75049C14.25 3.50759 13.243 2.50049 12 2.50049C11.91 2.50049 11.8239 2.5142 11.7369 2.5252"
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

export default UsersDots;
