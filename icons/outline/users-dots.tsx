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
          d="M13 15.0005C12.449 15.0005 12 14.5525 12 14.0005C12 13.4485 12.449 13.0005 13 13.0005C13.551 13.0005 14 13.4485 14 14.0005C14 14.5525 13.551 15.0005 13 15.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10 15.0005C9.449 15.0005 9 14.5525 9 14.0005C9 13.4485 9.449 13.0005 10 13.0005C10.551 13.0005 11 13.4485 11 14.0005C11 14.5525 10.551 15.0005 10 15.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10.5478 10.8225C9.59157 10.0034 8.35897 9.5005 7.00007 9.5005C4.85507 9.5005 3.00006 10.7295 2.09406 12.5205C1.69406 13.3115 2.12206 14.2773 2.96006 14.5684C3.99106 14.9266 5.36807 15.2515 7.00007 15.2515"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 15.0005C15.449 15.0005 15 14.5525 15 14.0005C15 13.4485 15.449 13.0005 16 13.0005C16.551 13.0005 17 13.4485 17 14.0005C17 14.5525 16.551 15.0005 16 15.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M7 7.0005C8.243 7.0005 9.25 5.9935 9.25 4.7505C9.25 3.5075 8.243 2.5005 7 2.5005C5.757 2.5005 4.75 3.5075 4.75 4.7505C4.75 5.9935 5.757 7.0005 7 7.0005Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.9756C11.824 6.9866 11.9101 7.0005 12 7.0005C13.243 7.0005 14.25 5.9934 14.25 4.7505C14.25 3.5076 13.243 2.5005 12 2.5005C11.91 2.5005 11.8239 2.51421 11.7369 2.52521"
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
