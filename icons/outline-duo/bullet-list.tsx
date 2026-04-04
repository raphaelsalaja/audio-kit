import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BulletList({
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
          d="M8.75 11.25H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 14.75H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 4.25H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 7.75H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 5.75C4.9665 5.75 5.75 4.966 5.75 4C5.75 3.034 4.9665 2.25 4 2.25C3.0335 2.25 2.25 3.034 2.25 4C2.25 4.966 3.0335 5.75 4 5.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4 12.75C4.9665 12.75 5.75 11.966 5.75 11C5.75 10.034 4.9665 9.25 4 9.25C3.0335 9.25 2.25 10.034 2.25 11C2.25 11.966 3.0335 12.75 4 12.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4 5.75C4.9665 5.75 5.75 4.966 5.75 4C5.75 3.034 4.9665 2.25 4 2.25C3.0335 2.25 2.25 3.034 2.25 4C2.25 4.966 3.0335 5.75 4 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 12.75C4.9665 12.75 5.75 11.966 5.75 11C5.75 10.034 4.9665 9.25 4 9.25C3.0335 9.25 2.25 10.034 2.25 11C2.25 11.966 3.0335 12.75 4 12.75Z"
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

export default BulletList;
