import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserShield({
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
          d="M14.5 10.7505L11.75 12.0005V14.9405C11.75 16.4805 14.5 17.2505 14.5 17.2505V10.7505Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9.71799 9.80029C9.48289 9.76909 9.24379 9.75049 8.99999 9.75049C6.44899 9.75049 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5157C5.45279 15.8983 7.05878 16.2418 8.95398 16.2476"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 10.7505L17.25 12.0005V14.9405C17.25 16.4805 14.5 17.2505 14.5 17.2505C14.5 17.2505 11.75 16.4805 11.75 14.9405V12.0005L14.5 10.7505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserShield;
