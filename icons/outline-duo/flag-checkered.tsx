import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlagCheckered({
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
          d="M7.031 2.256C7.10618 2.26752 7.17911 2.2814 7.25 2.29743V5.58005C5.92994 5.39179 5.16374 5.59931 3.75 6.53344V3.24C4.911 2.432 6.006 2.098 7.031 2.256ZM10.75 7.46414C10.1401 7.35178 9.61038 6.96139 9.06562 6.55992C8.50974 6.15027 7.93823 5.72909 7.25 5.58005V8.83747L7.20695 8.85101C7.9557 9.0092 8.47728 9.40601 8.99904 9.80296C9.51094 10.1924 10.023 10.582 10.75 10.7465L10.75 7.46414ZM10.75 7.45279C12.0621 7.71733 12.8406 7.36979 14.25 6.5221V3.241C13.075 4.058 11.982 4.38 10.969 4.225C10.8938 4.21345 10.8209 4.19956 10.75 4.18353L10.75 7.45279Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.75 3.24C4.911 2.432 6.006 2.098 7.031 2.256C8.721 2.515 9.276 3.965 10.969 4.225C11.982 4.38 13.075 4.058 14.25 3.241V9.804C13.075 10.622 11.982 10.944 10.969 10.788C9.277 10.528 8.721 9.078 7.031 8.819C6.005 8.662 4.911 8.996 3.75 9.803"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 6.521C4.911 5.713 6.006 5.379 7.031 5.537C8.721 5.796 9.276 7.246 10.969 7.506C11.982 7.661 13.075 7.339 14.25 6.522"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 2.297V8.86"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 4.182V10.744"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 2V16"
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

export default FlagCheckered;
