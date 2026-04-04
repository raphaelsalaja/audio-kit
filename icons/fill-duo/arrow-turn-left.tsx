import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnLeft({
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
          d="M13.25 10.5H3C2.586 10.5 2.25 10.164 2.25 9.75C2.25 9.336 2.586 9 3 9H13.25C13.939 9 14.5 8.439 14.5 7.75V3.75C14.5 3.336 14.836 3 15.25 3C15.664 3 16 3.336 16 3.75V7.75C16 9.267 14.767 10.5 13.25 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.99999 14.75C6.80799 14.75 6.61599 14.677 6.46999 14.53L2.21999 10.28C1.92699 9.98699 1.92699 9.51199 2.21999 9.21899L6.46999 4.96999C6.76299 4.67699 7.238 4.67699 7.531 4.96999C7.824 5.26299 7.824 5.738 7.531 6.031L3.811 9.751L7.531 13.471C7.824 13.764 7.824 14.239 7.531 14.532C7.385 14.678 7.193 14.752 7.001 14.752L6.99999 14.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTurnLeft;
