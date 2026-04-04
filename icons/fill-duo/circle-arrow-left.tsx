import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleArrowLeft({
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
          d="M17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.72 12.0301L5.22 9.53005C5.074 9.38405 5 9.19202 5 9.00002C5 8.80802 5.073 8.61599 5.22 8.46999L7.72 5.96999C8.013 5.67699 8.48801 5.67699 8.78101 5.96999C9.07401 6.26299 9.07401 6.73803 8.78101 7.03103L7.561 8.251H12.25C12.664 8.251 13 8.587 13 9.001C13 9.415 12.664 9.751 12.25 9.751H7.561L8.78101 10.971C9.07401 11.264 9.07401 11.739 8.78101 12.032C8.48801 12.325 8.013 12.325 7.72 12.032V12.0301Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleArrowLeft;
