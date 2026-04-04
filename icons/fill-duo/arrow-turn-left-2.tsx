import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnLeft2({
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
          d="M15.25 15C14.836 15 14.5 14.664 14.5 14.25V10.25C14.5 9.561 13.939 9 13.25 9H3C2.586 9 2.25 8.664 2.25 8.25C2.25 7.836 2.586 7.5 3 7.5H13.25C14.767 7.5 16 8.733 16 10.25V14.25C16 14.664 15.664 15 15.25 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.99999 13.25C6.80799 13.25 6.61599 13.177 6.46999 13.03L2.21999 8.77999C1.92699 8.48699 1.92699 8.01199 2.21999 7.71899L6.46999 3.46999C6.76299 3.17699 7.238 3.17699 7.531 3.46999C7.824 3.76299 7.824 4.238 7.531 4.531L3.811 8.251L7.531 11.971C7.824 12.264 7.824 12.739 7.531 13.032C7.385 13.178 7.193 13.252 7.001 13.252L6.99999 13.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTurnLeft2;
