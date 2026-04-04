import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBackToUpRight({
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
          d="M2.25 7C2.25 5.89543 3.14543 5 4.25 5H14C15.1046 5 16 5.89543 16 7V12.25C16 13.3546 15.1046 14.25 14 14.25H4.25C3.14543 14.25 2.25 13.3546 2.25 12.25V7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 9.25V12.25C15.75 13.355 14.855 14.25 13.75 14.25H4.25C3.145 14.25 2.25 13.355 2.25 12.25V6.75C2.25 5.645 3.145 4.75 4.25 4.75H14.242"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 7.75001L14.242 4.75801L11.25 1.76501"
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

export default ArrowBackToUpRight;
