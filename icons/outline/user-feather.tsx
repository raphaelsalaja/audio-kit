import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserFeather({
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
          d="M9 7.25049C10.519 7.25049 11.75 6.01949 11.75 4.50049C11.75 2.98149 10.519 1.75049 9 1.75049C7.481 1.75049 6.25 2.98149 6.25 4.50049C6.25 6.01949 7.481 7.25049 9 7.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 17.2505C10.75 17.2505 11.432 11.2595 17.25 10.7505C15.82 12.4405 17.25 15.7505 13.5 15.7505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.2464 10.1799C10.5491 9.9079 9.79449 9.75049 8.99999 9.75049C6.44899 9.75049 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5157C5.21209 15.8233 6.46019 16.0853 7.88779 16.1856"
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

export default UserFeather;
