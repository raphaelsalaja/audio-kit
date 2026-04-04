import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartActivity3({
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
          d="M15.75 8.75H15.25C14.145 8.75 13.25 9.645 13.25 10.75V13.125C13.25 14.299 12.299 15.25 11.125 15.25C9.951 15.25 9 14.299 9 13.125V9V4.875C9 3.701 8.049 2.75 6.875 2.75C5.701 2.75 4.75 3.701 4.75 4.875V7.25C4.75 8.355 3.855 9.25 2.75 9.25H2.25"
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

export default ChartActivity3;
