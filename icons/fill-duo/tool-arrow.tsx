import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ToolArrow({
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
          d="M2.74999 16C2.55799 16 2.36599 15.9271 2.21999 15.7801C1.92699 15.4871 1.92699 15.012 2.21999 14.719L11.192 5.74807C11.485 5.45507 11.96 5.45507 12.253 5.74807C12.546 6.04107 12.546 6.51598 12.253 6.80898L3.27999 15.7801C3.13399 15.9261 2.94199 16 2.74999 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.78 2.22003C15.579 2.01903 15.283 1.949 15.012 2.039L9.72 3.80304C9.474 3.88504 9.28699 4.0891 9.22799 4.3421C9.16699 4.5951 9.244 4.8611 9.427 5.0451L12.955 8.57306C13.098 8.71606 13.289 8.79303 13.485 8.79303C13.543 8.79303 13.6 8.78701 13.657 8.77301C13.911 8.71301 14.114 8.52709 14.197 8.28009L15.961 2.9881C16.051 2.7181 15.982 2.42103 15.78 2.22003Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ToolArrow;
