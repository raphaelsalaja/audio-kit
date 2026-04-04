import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mug({
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
          d="M7.99998 15.25H11.993C12.63 15.25 13.098 14.665 12.97 14.041C12.683 12.643 12.458 10.94 12.458 9C12.458 7.644 12.568 5.913 12.972 3.949C13.099 3.331 12.626 2.75 11.996 2.75H7.99998H4.00399C3.37299 2.75 2.90099 3.331 3.02799 3.949C3.43199 5.913 3.54198 7.644 3.54198 9C3.54198 10.94 3.31698 12.643 3.02998 14.041C2.90198 14.665 3.36998 15.25 4.00698 15.25H7.99998Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.821 4.75H15.25C15.802 4.75 16.25 5.198 16.25 5.75V7.25C16.25 8.907 14.907 10.25 13.25 10.25H12.49"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.99998 15.25H11.993C12.63 15.25 13.098 14.665 12.97 14.041C12.683 12.643 12.458 10.94 12.458 9C12.458 7.644 12.568 5.913 12.972 3.949C13.099 3.331 12.626 2.75 11.996 2.75H7.99998H4.00399C3.37299 2.75 2.90099 3.331 3.02799 3.949C3.43199 5.913 3.54198 7.644 3.54198 9C3.54198 10.94 3.31698 12.643 3.02998 14.041C2.90198 14.665 3.36998 15.25 4.00698 15.25H7.99998Z"
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

export default Mug;
