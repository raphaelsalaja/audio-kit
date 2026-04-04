import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineMinimizeDiagonal2({
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
          d="M13.125 13.125L15.25 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.875 4.875L2.75 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 14.896V11C10.75 10.862 10.862 10.75 11 10.75H14.896C15.119 10.75 15.23 11.019 15.073 11.177L11.177 15.073C11.02 15.23 10.75 15.119 10.75 14.896Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 14.896V11C10.75 10.862 10.862 10.75 11 10.75H14.896C15.119 10.75 15.23 11.019 15.073 11.177L11.177 15.073C11.02 15.23 10.75 15.119 10.75 14.896Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.10403 7.24999H7.00003C7.13803 7.24999 7.25003 7.13799 7.25003 6.99999V3.10399C7.25003 2.88099 6.98102 2.76999 6.82302 2.92699L2.92703 6.82299C2.77003 6.97999 2.88103 7.24999 3.10403 7.24999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.10403 7.24999H7.00003C7.13803 7.24999 7.25003 7.13799 7.25003 6.99999V3.10399C7.25003 2.88099 6.98102 2.76999 6.82302 2.92699L2.92703 6.82299C2.77003 6.97999 2.88103 7.24999 3.10403 7.24999Z"
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

export default ArrowTriangleLineMinimizeDiagonal2;
