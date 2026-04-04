import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutSidebar({
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
          d="M4.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H4.25C5.35457 15.25 6.25 14.3546 6.25 13.25V4.75C6.25 3.64543 5.35457 2.75 4.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4 2.75H14.25C15.355 2.75 16.25 3.645 16.25 4.75V13.25C16.25 14.355 15.355 15.25 14.25 15.25H4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H4.25C5.35457 15.25 6.25 14.3546 6.25 13.25V4.75C6.25 3.64543 5.35457 2.75 4.25 2.75Z"
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

export default LayoutSidebar;
