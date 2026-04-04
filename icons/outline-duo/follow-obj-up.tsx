import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjUp({
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
          d="M3.75 5.75L14.25 5.75C14.8023 5.75 15.25 5.30228 15.25 4.75V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75L3.75 2.75C3.19771 2.75 2.75 3.19772 2.75 3.75V4.75C2.75 5.30228 3.19771 5.75 3.75 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 5.75L14.25 5.75C14.8023 5.75 15.25 5.30228 15.25 4.75V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75L3.75 2.75C3.19771 2.75 2.75 3.19772 2.75 3.75V4.75C2.75 5.30228 3.19771 5.75 3.75 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 12L9 8.75L12.25 12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.75V16.25"
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

export default FollowObjUp;
