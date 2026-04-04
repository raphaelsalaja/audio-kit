import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCaretDown({
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
          d="M9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.643 8.66998L9.621 11.657C9.324 12.096 8.676 12.096 8.379 11.657L6.35699 8.66998C6.01999 8.17198 6.377 7.5 6.978 7.5H11.022C11.623 7.5 11.98 8.17198 11.643 8.66998Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCaretDown;
