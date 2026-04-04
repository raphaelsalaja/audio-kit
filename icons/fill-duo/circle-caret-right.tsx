import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCaretRight({
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
          d="M9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.5 11.022V6.97804C7.5 6.37704 8.172 6.02 8.67 6.357L11.657 8.37904C12.096 8.67604 12.096 9.32398 11.657 9.62098L8.67 11.643C8.172 11.98 7.5 11.623 7.5 11.022Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCaretRight;
