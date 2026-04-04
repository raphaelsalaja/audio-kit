import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2Bottom({
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
          d="M7.75 12.25H10.25C10.8023 12.25 11.25 11.8023 11.25 11.25L11.25 3.75C11.25 3.19771 10.8023 2.75 10.25 2.75H7.75C7.19772 2.75 6.75 3.19771 6.75 3.75L6.75 11.25C6.75 11.8023 7.19772 12.25 7.75 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 15.25H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 12.25H10.25C10.8023 12.25 11.25 11.8023 11.25 11.25L11.25 3.75C11.25 3.19771 10.8023 2.75 10.25 2.75H7.75C7.19772 2.75 6.75 3.19771 6.75 3.75L6.75 11.25C6.75 11.8023 7.19772 12.25 7.75 12.25Z"
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

export default Align2Bottom;
