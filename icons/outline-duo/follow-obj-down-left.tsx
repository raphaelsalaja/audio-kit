import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjDownLeft({
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
          d="M3.75 15.25H7.25C7.80228 15.25 8.25 14.8023 8.25 14.25V10.75C8.25 10.1977 7.80228 9.75 7.25 9.75H3.75C3.19772 9.75 2.75 10.1977 2.75 10.75L2.75 14.25C2.75 14.8023 3.19772 15.25 3.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 15.25H7.25C7.80228 15.25 8.25 14.8023 8.25 14.25V10.75C8.25 10.1977 7.80228 9.75 7.25 9.75H3.75C3.19772 9.75 2.75 10.1977 2.75 10.75L2.75 14.25C2.75 14.8023 3.19772 15.25 3.75 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 2.75L10.25 7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.76 7.75H10.25V3.24"
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

export default FollowObjDownLeft;
