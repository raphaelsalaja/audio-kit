import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineMinimizeDiagonal({
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
          d="M4.875 13.125L2.75 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.125 4.875L15.25 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25003 14.896V11C7.25003 10.862 7.13803 10.75 7.00003 10.75H3.10403C2.88103 10.75 2.77003 11.019 2.92703 11.177L6.82302 15.073C6.98002 15.23 7.25003 15.119 7.25003 14.896Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25003 14.896V11C7.25003 10.862 7.13803 10.75 7.00003 10.75H3.10403C2.88103 10.75 2.77003 11.019 2.92703 11.177L6.82302 15.073C6.98002 15.23 7.25003 15.119 7.25003 14.896Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.896 7.24999H11C10.862 7.24999 10.75 7.13799 10.75 6.99999V3.10399C10.75 2.88099 11.019 2.76999 11.177 2.92699L15.073 6.82299C15.23 6.97999 15.119 7.24999 14.896 7.24999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.896 7.24999H11C10.862 7.24999 10.75 7.13799 10.75 6.99999V3.10399C10.75 2.88099 11.019 2.76999 11.177 2.92699L15.073 6.82299C15.23 6.97999 15.119 7.24999 14.896 7.24999Z"
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

export default ArrowTriangleLineMinimizeDiagonal;
