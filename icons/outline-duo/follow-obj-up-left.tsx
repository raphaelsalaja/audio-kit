import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjUpLeft({
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
          d="M2.75 3.75L2.75 7.25C2.75 7.80228 3.19772 8.25 3.75 8.25H7.25C7.80228 8.25 8.25 7.80228 8.25 7.25V3.75C8.25 3.19772 7.80228 2.75 7.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 3.75L2.75 7.25C2.75 7.80228 3.19772 8.25 3.75 8.25H7.25C7.80228 8.25 8.25 7.80228 8.25 7.25V3.75C8.25 3.19772 7.80228 2.75 7.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 15.25L10.25 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 14.76V10.25H14.76"
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

export default FollowObjUpLeft;
