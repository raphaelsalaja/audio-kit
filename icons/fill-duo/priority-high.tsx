import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PriorityHigh({
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
          d="M8.46967 4.71967C8.76256 4.42678 9.23744 4.42678 9.53033 4.71967L15.7803 10.9697C16.0732 11.2626 16.0732 11.7374 15.7803 12.0303C15.4874 12.3232 15.0126 12.3232 14.7197 12.0303L9 6.31066L3.28033 12.0303C2.98744 12.3232 2.51256 12.3232 2.21967 12.0303C1.92678 11.7374 1.92678 11.2626 2.21967 10.9697L8.46967 4.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PriorityHigh;
