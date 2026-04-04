import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowUpLeft2({
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
          d="M15 13.08V4.92C15 3.85961 14.1404 3 13.08 3L4.92 3C3.85961 3 3 3.85961 3 4.92V13.08C3 14.1404 3.85961 15 4.92 15H13.08C14.1404 15 15 14.1404 15 13.08Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 7L12.689 12.689C13.634 13.634 12.965 15.25 11.628 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V4.75C2.75 3.645 3.645 2.75 4.75 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 11.25V6.75H11.25"
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

export default SquareArrowUpLeft2;
