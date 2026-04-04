import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDiagonalIn({
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
          d="M4.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2H9.5V7.25C9.5 8.491 8.49 9.5 7.25 9.5H2V13.25C2 14.767 3.233 16 4.75 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.21999 2.28L5.43899 6.5H2.74999C2.33599 6.5 1.99999 6.836 1.99999 7.25C1.99999 7.664 2.33599 8 2.74999 8H7.24999C7.66399 8 7.99999 7.664 7.99999 7.25V2.75C7.99999 2.336 7.66399 2 7.24999 2C6.83599 2 6.49999 2.336 6.49999 2.75V5.439L2.27999 1.22C2.13399 1.074 1.94199 1 1.74999 1C1.55799 1 1.36599 1.073 1.21999 1.22C0.926994 1.513 0.926994 1.987 1.21999 2.28Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDiagonalIn;
