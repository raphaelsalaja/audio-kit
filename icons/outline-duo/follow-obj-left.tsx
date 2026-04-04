import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjLeft({
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
          d="M5.75 14.25L5.75 3.75C5.75 3.19772 5.30228 2.75 4.75 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75L2.75 14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H4.75C5.30228 15.25 5.75 14.8023 5.75 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 14.25L5.75 3.75C5.75 3.19772 5.30228 2.75 4.75 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75L2.75 14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H4.75C5.30228 15.25 5.75 14.8023 5.75 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 12.25L8.75 9L12 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 9H16.25"
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

export default FollowObjLeft;
