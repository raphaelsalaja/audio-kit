import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChevronLeft({
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
          d="M10.53 11.47C10.823 11.763 10.823 12.238 10.53 12.531C10.384 12.677 10.192 12.751 9.99999 12.751C9.80799 12.751 9.61599 12.678 9.46999 12.531L6.46999 9.53103C6.17699 9.23803 6.17699 8.76299 6.46999 8.46999L9.46999 5.46999C9.76299 5.17699 10.238 5.17699 10.531 5.46999C10.824 5.76299 10.824 6.23803 10.531 6.53103L8.06099 9.001L10.531 11.471L10.53 11.47Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleChevronLeft;
