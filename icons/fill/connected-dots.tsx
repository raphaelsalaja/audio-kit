import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConnectedDots({
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
          d="M9 6C9.41421 6 9.75 6.33579 9.75 6.75V9.75C9.75 10.1642 9.41421 10.5 9 10.5C8.58579 10.5 8.25 10.1642 8.25 9.75V6.75C8.25 6.33579 8.58579 6 9 6Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9.59161 9.28902C9.8462 9.61575 9.78772 10.087 9.46099 10.3416L6.30399 12.8016C5.97726 13.0562 5.506 12.9977 5.25141 12.671C4.99681 12.3443 5.05529 11.873 5.38202 11.6184L8.53902 9.1584C8.86575 8.90381 9.33701 8.96228 9.59161 9.28902Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M8.4084 9.28902C8.663 8.96228 9.13426 8.90381 9.46099 9.1584L12.618 11.6184C12.9447 11.873 13.0032 12.3443 12.7486 12.671C12.494 12.9977 12.0227 13.0562 11.696 12.8016L8.53902 10.3416C8.21228 10.087 8.15381 9.61575 8.4084 9.28902Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M6 4.5C6 2.8427 7.34327 1.5 9 1.5C10.6567 1.5 12 2.8427 12 4.5C12 6.1573 10.6567 7.5 9 7.5C7.34327 7.5 6 6.1573 6 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 13.5C11 11.8427 12.3433 10.5 14 10.5C15.6567 10.5 17 11.8427 17 13.5C17 15.1573 15.6567 16.5 14 16.5C12.3433 16.5 11 15.1573 11 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 13.5C1 11.8427 2.34327 10.5 4 10.5C5.65673 10.5 7 11.8427 7 13.5C7 15.1573 5.65673 16.5 4 16.5C2.34327 16.5 1 15.1573 1 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ConnectedDots;
