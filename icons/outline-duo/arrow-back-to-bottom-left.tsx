import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBackToBottomLeft({
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
          d="M2 5.75C2 4.64543 2.89543 3.75 4 3.75H13.75C14.8546 3.75 15.75 4.64543 15.75 5.75V11C15.75 12.1046 14.8546 13 13.75 13H4C2.89543 13 2 12.1046 2 11V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 8.75V5.75C2.25 4.645 3.145 3.75 4.25 3.75H13.75C14.855 3.75 15.75 4.645 15.75 5.75V11.25C15.75 12.355 14.855 13.25 13.75 13.25H3.758"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 10.25L3.758 13.242L6.75 16.235"
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

export default ArrowBackToBottomLeft;
