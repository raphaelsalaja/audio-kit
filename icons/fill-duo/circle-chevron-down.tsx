import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChevronDown({
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
          d="M11.47 7.46999C11.763 7.17699 12.238 7.17699 12.531 7.46999C12.677 7.61599 12.751 7.80802 12.751 8.00002C12.751 8.19202 12.678 8.38405 12.531 8.53005L9.531 11.5301C9.238 11.8231 8.76299 11.8231 8.46999 11.5301L5.46999 8.53005C5.17699 8.23705 5.17699 7.76202 5.46999 7.46902C5.76299 7.17602 6.238 7.17602 6.531 7.46902L9.001 9.93905L11.471 7.46902L11.47 7.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleChevronDown;
