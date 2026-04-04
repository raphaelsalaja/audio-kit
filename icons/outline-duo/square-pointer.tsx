import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePointer({
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
          d="M10.184 9.76997L17.038 12.27C17.327 12.38 17.318 12.79 17.026 12.88L13.889 13.89L12.885 17.03C12.791 17.3199 12.38 17.3299 12.274 17.04L9.76998 10.18C9.67598 9.93 9.92598 9.67997 10.184 9.76997Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M10.184 9.76997L17.038 12.27C17.327 12.38 17.318 12.79 17.026 12.88L13.889 13.89L12.885 17.03C12.791 17.3199 12.38 17.3299 12.274 17.04L9.76998 10.18C9.67598 9.93 9.92598 9.67997 10.184 9.76997Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.2426 8.4248V4.75C15.2426 3.6499 14.3476 2.75 13.2426 2.75H4.74255C3.63755 2.75 2.74255 3.6499 2.74255 4.75V13.25C2.74255 14.3501 3.63755 15.25 4.74255 15.25H8.41946"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SquarePointer;
