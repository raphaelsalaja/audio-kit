import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBackToUpLeft({
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
          d="M2 7C2 5.89543 2.89543 5 4 5H13.75C14.8546 5 15.75 5.89543 15.75 7V12.25C15.75 13.3546 14.8546 14.25 13.75 14.25H4C2.89543 14.25 2 13.3546 2 12.25V7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 9.25V12.25C2.25 13.355 3.145 14.25 4.25 14.25H13.75C14.855 14.25 15.75 13.355 15.75 12.25V6.75C15.75 5.645 14.855 4.75 13.75 4.75H3.758"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 7.75001L3.758 4.75801L6.75 1.76501"
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

export default ArrowBackToUpLeft;
