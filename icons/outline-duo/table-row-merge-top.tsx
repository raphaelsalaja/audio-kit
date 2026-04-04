import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowMergeTop({
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
          d="M15.25 9.25V13.25C15.25 14.355 14.35 15.25 13.25 15.25H4.75C3.65 15.25 2.75 14.355 2.75 13.25V9.25H15.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 9.25H2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 3.25L9 0.75L11.5 3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 0.75V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5176 3.43079C3.0503 3.79589 2.75 4.361 2.75 5V13.25C2.75 14.354 3.6401 15.25 4.75 15.25H13.25C14.3599 15.25 15.25 14.354 15.25 13.25V5C15.25 4.361 14.9497 3.79657 14.4824 3.43127"
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

export default TableRowMergeTop;
