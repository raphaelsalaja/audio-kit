import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCaretUp({
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
          d="M11.022 10.5H6.97798C6.37698 10.5 6.01998 9.82804 6.35698 9.33004L8.37898 6.34304C8.67598 5.90404 9.32399 5.90404 9.62099 6.34304L11.643 9.33004C11.98 9.82804 11.623 10.5 11.022 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCaretUp;
