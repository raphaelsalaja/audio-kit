import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BooleanExclude({
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
          d="M14.25 6.75H11.25V3.75C11.25 3.198 10.802 2.75 10.25 2.75H3.75C3.198 2.75 2.75 3.198 2.75 3.75V10.25C2.75 10.802 3.198 11.25 3.75 11.25H6.75V14.25C6.75 14.802 7.198 15.25 7.75 15.25H14.25C14.802 15.25 15.25 14.802 15.25 14.25V7.75C15.25 7.198 14.802 6.75 14.25 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.75H7.75C7.198 6.75 6.75 7.198 6.75 7.75V8.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 9V10.25C11.25 10.802 10.802 11.25 10.25 11.25H9.25"
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

export default BooleanExclude;
