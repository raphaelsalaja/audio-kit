import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ReplaceObjs({
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
          d="M4.25 16.25C5.2165 16.25 6 15.4683 6 14.5C6 13.5317 5.2165 12.75 4.25 12.75C3.2835 12.75 2.5 13.5317 2.5 14.5C2.5 15.4683 3.2835 16.25 4.25 16.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 5.25C14.7165 5.25 15.5 4.4683 15.5 3.5C15.5 2.5317 14.7165 1.75 13.75 1.75C12.7835 1.75 12 2.5317 12 3.5C12 4.4683 12.7835 5.25 13.75 5.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.76501 7.26001L4.25801 9.75L6.75002 7.26001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.235 10.74L13.742 8.25L11.25 10.74"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 9.75V5.25C4.25 4.14 5.145 3.25 6.25 3.25H9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 8.25V12.75C13.75 13.86 12.855 14.75 11.75 14.75H9"
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

export default ReplaceObjs;
