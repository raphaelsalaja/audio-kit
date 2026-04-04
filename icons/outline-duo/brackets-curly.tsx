import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BracketsCurly({
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
          d="M6.25 15.25H5.25C4.145 15.25 3.25 14.355 3.25 13.25V10.625C3.25 9.728 2.522 9 1.625 9C2.522 9 3.25 8.272 3.25 7.375V4.75C3.25 3.645 4.145 2.75 5.25 2.75H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 15.25H12.75C13.855 15.25 14.75 14.355 14.75 13.25V10.625C14.75 9.728 15.478 9 16.375 9C15.478 9 14.75 8.272 14.75 7.375V4.75C14.75 3.645 13.855 2.75 12.75 2.75H11.75"
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

export default BracketsCurly;
