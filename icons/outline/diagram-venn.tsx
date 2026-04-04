import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiagramVenn({
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
          d="M11.5 3.5C10.5896 3.5 9.7465 3.7527 9.0001 4.1602C8.2537 3.7527 7.4104 3.5 6.5 3.5C3.6005 3.5 1.25 5.8501 1.25 8.75C1.25 11.6499 3.6005 14 6.5 14C7.4104 14 8.2537 13.7473 9.0001 13.3398C9.7465 13.7473 10.5896 14 11.5 14C14.3995 14 16.75 11.6499 16.75 8.75C16.75 5.8501 14.3995 3.5 11.5 3.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.0001 4.1602C7.3694 5.0511 6.25 6.7608 6.25 8.75C6.25 10.7392 7.3693 12.449 9.0001 13.3398C10.6308 12.4489 11.75 10.7392 11.75 8.75C11.75 6.7608 10.6308 5.051 9.0001 4.1602Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DiagramVenn;
