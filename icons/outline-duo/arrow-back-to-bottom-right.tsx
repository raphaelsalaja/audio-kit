import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBackToBottomRight({
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
          d="M2.25 5.75C2.25 4.64543 3.14543 3.75 4.25 3.75H14C15.1046 3.75 16 4.64543 16 5.75V11C16 12.1046 15.1046 13 14 13H4.25C3.14543 13 2.25 12.1046 2.25 11V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 8.75V5.75C15.75 4.645 14.855 3.75 13.75 3.75H4.25C3.145 3.75 2.25 4.645 2.25 5.75V11.25C2.25 12.355 3.145 13.25 4.25 13.25H14.242"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 10.25L14.242 13.242L11.25 16.235"
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

export default ArrowBackToBottomRight;
