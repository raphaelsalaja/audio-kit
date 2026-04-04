import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderDots({
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
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.02499 7.761 3.49799L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.09399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 16C13.449 16 13 15.552 13 15C13 14.448 13.449 14 14 14C14.551 14 15 14.448 15 15C15 15.552 14.551 16 14 16Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11 16C10.449 16 10 15.552 10 15C10 14.448 10.449 14 11 14C11.551 14 12 14.448 12 15C12 15.552 11.551 16 11 16Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.75 12.0153V8.75C15.75 7.646 14.855 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H7.7603"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17 16C16.449 16 16 15.552 16 15C16 14.448 16.449 14 17 14C17.551 14 18 14.448 18 15C18 15.552 17.551 16 17 16Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FolderDots;
