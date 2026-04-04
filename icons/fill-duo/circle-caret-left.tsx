import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCaretLeft({
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
          d="M1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.33 11.643L6.343 9.62098C5.904 9.32398 5.904 8.67604 6.343 8.37904L9.33 6.357C9.828 6.02 10.5 6.37704 10.5 6.97804V11.022C10.5 11.623 9.828 11.98 9.33 11.643Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCaretLeft;
