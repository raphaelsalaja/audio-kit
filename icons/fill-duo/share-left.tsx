import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareLeft({
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
          d="M3.5 6.25V13.25C3.5 14.767 4.733 16 6.25 16H13.25C14.767 16 16 14.767 16 13.25V6.25C16 4.733 14.767 3.5 13.25 3.5H6.25C4.733 3.5 3.5 4.733 3.5 6.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.46999 1.21999C4.76299 0.926994 5.238 0.926994 5.531 1.21999C5.824 1.51299 5.824 1.98803 5.531 2.28103L3.561 4.251H5.24999C7.86899 4.251 9.99999 6.382 9.99999 9.001C9.99999 9.415 9.66399 9.751 9.24999 9.751C8.83599 9.751 8.49999 9.415 8.49999 9.001C8.49999 7.209 7.04199 5.751 5.24999 5.751H3.561L5.531 7.72097C5.824 8.01397 5.824 8.48901 5.531 8.78201C5.385 8.92801 5.193 9.00198 5.001 9.00198C4.809 9.00198 4.61699 8.92901 4.47099 8.78201L1.22099 5.53201C0.927986 5.23901 0.927986 4.76397 1.22099 4.47097L4.47099 1.22097L4.46999 1.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareLeft;
