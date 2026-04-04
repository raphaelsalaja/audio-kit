import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCircle({
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
          d="M9.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V9.25C2.75 9.80228 3.19772 10.25 3.75 10.25H9.25C9.80228 10.25 10.25 9.80228 10.25 9.25V3.75C10.25 3.19772 9.80228 2.75 9.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.458 10.25C7.335 10.648 7.25 11.062 7.25 11.5C7.25 13.847 9.153 15.75 11.5 15.75C13.847 15.75 15.75 13.847 15.75 11.5C15.75 9.153 13.847 7.25 11.5 7.25C11.062 7.25 10.648 7.335 10.25 7.458"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V9.25C2.75 9.80228 3.19772 10.25 3.75 10.25H9.25C9.80228 10.25 10.25 9.80228 10.25 9.25V3.75C10.25 3.19772 9.80228 2.75 9.25 2.75Z"
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

export default SquareCircle;
