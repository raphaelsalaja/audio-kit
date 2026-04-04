import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareQuestion({
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
          d="M13.25 2.75H4.75C3.645 2.75 2.75 3.65 2.75 4.75V13.25C2.75 14.35 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.35 15.25 13.25V4.75C15.25 3.65 14.355 2.75 13.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.92505 6.73999C7.31305 5.68009 8.21904 5.25 9.10504 5.25C10 5.25 11.0368 5.88555 10.923 7.05005C10.7647 8.67055 9.20005 8.48228 8.85175 9.74988"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.79102 13.5C8.24002 13.5 7.79102 13.05 7.79102 12.5C7.79102 11.95 8.24002 11.5 8.79102 11.5C9.34202 11.5 9.79102 11.9501 9.79102 12.5C9.79102 13.0499 9.34202 13.5 8.79102 13.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareQuestion;
