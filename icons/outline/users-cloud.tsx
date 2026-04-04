import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersCloud({
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
          d="M7 7.00049C8.243 7.00049 9.25 5.99309 9.25 4.75049C9.25 3.50789 8.243 2.50049 7 2.50049C5.757 2.50049 4.75 3.50789 4.75 4.75049C4.75 5.99309 5.757 7.00049 7 7.00049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5875 10.1677C8.8161 9.74899 7.9402 9.50049 7 9.50049C4.855 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.12201 14.2773 2.96001 14.5684C3.95261 14.9131 5.27211 15.2203 6.82511 15.2432"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 10.75C13.2297 10.75 12.1711 11.616 11.8553 12.7864C11.7405 12.7627 11.6217 12.75 11.5 12.75C10.5335 12.75 9.75 13.5335 9.75 14.5C9.75 15.4665 10.5335 16.25 11.5 16.25H14.5C16.0188 16.25 17.25 15.0187 17.25 13.5C17.25 11.9813 16.0188 10.75 14.5 10.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.97559C11.824 6.98659 11.9101 7.00049 12 7.00049C13.243 7.00049 14.25 5.99339 14.25 4.75049C14.25 3.50759 13.243 2.50049 12 2.50049C11.91 2.50049 11.8239 2.51419 11.7369 2.52519"
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

export default UsersCloud;
