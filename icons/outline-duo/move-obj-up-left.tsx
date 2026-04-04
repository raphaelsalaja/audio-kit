import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjUpLeft({
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
          d="M14.25 9.75H10.75C10.1977 9.75 9.75 10.1977 9.75 10.75V14.25C9.75 14.8023 10.1977 15.25 10.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V10.75C15.25 10.1977 14.8023 9.75 14.25 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 9.75H10.75C10.1977 9.75 9.75 10.1977 9.75 10.75V14.25C9.75 14.8023 10.1977 15.25 10.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V10.75C15.25 10.1977 14.8023 9.75 14.25 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 7.75L2.75 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.26 2.75H2.75V7.26"
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

export default MoveObjUpLeft;
