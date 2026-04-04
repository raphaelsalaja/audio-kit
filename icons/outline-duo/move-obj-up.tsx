import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjUp({
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
          d="M14.25 12.75H3.75C3.19772 12.75 2.75 13.1977 2.75 13.75V14.75C2.75 15.3023 3.19772 15.75 3.75 15.75H14.25C14.8023 15.75 15.25 15.3023 15.25 14.75V13.75C15.25 13.1977 14.8023 12.75 14.25 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 12.75H3.75C3.19772 12.75 2.75 13.1977 2.75 13.75V14.75C2.75 15.3023 3.19772 15.75 3.75 15.75H14.25C14.8023 15.75 15.25 15.3023 15.25 14.75V13.75C15.25 13.1977 14.8023 12.75 14.25 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 5.5L9 2.25L12.25 5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2.25V9.75"
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

export default MoveObjUp;
