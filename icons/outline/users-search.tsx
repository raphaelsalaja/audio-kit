import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersSearch({
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
          d="M13.5 15.2505C14.743 15.2505 15.75 14.2431 15.75 13.0005C15.75 11.7579 14.743 10.7505 13.5 10.7505C12.257 10.7505 11.25 11.7579 11.25 13.0005C11.25 14.2431 12.257 15.2505 13.5 15.2505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.09 14.5905L16.75 16.2505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7.00049C8.243 7.00049 9.25 5.99309 9.25 4.75049C9.25 3.50789 8.243 2.50049 7 2.50049C5.757 2.50049 4.75 3.50789 4.75 4.75049C4.75 5.99309 5.757 7.00049 7 7.00049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.97559C11.824 6.98659 11.9101 7.00049 12 7.00049C13.243 7.00049 14.25 5.99339 14.25 4.75049C14.25 3.50759 13.243 2.50049 12 2.50049C11.91 2.50049 11.8239 2.51418 11.7369 2.52518"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.2154 9.98538C8.5371 9.68118 7.7927 9.50049 7 9.50049C4.855 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.12201 14.2773 2.96001 14.5684C3.99101 14.9266 5.368 15.2515 7 15.2515C7.6107 15.2515 8.1718 15.1958 8.7056 15.1202"
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

export default UsersSearch;
