import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfDottedClock({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.75V9L12.25 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.75C13.004 1.75 16.25 4.996 16.25 9C16.25 13.004 13.004 16.25 9 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.87305 14.877C4.28726 14.877 4.62305 14.5412 4.62305 14.127C4.62305 13.7128 4.28726 13.377 3.87305 13.377C3.45883 13.377 3.12305 13.7128 3.12305 14.127C3.12305 14.5412 3.45883 14.877 3.87305 14.877Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 9.75C2.16421 9.75 2.5 9.41421 2.5 9C2.5 8.58579 2.16421 8.25 1.75 8.25C1.33579 8.25 1 8.58579 1 9C1 9.41421 1.33579 9.75 1.75 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.87305 4.623C4.28726 4.623 4.62305 4.28721 4.62305 3.873C4.62305 3.45879 4.28726 3.123 3.87305 3.123C3.45883 3.123 3.12305 3.45879 3.12305 3.873C3.12305 4.28721 3.45883 4.623 3.87305 4.623Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.22595 16.448C6.64017 16.448 6.97595 16.1122 6.97595 15.698C6.97595 15.2838 6.64017 14.948 6.22595 14.948C5.81174 14.948 5.47595 15.2838 5.47595 15.698C5.47595 16.1122 5.81174 16.448 6.22595 16.448Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.302 12.524C2.71622 12.524 3.052 12.1882 3.052 11.774C3.052 11.3598 2.71622 11.024 2.302 11.024C1.88779 11.024 1.552 11.3598 1.552 11.774C1.552 12.1882 1.88779 12.524 2.302 12.524Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.302 6.976C2.71622 6.976 3.052 6.64021 3.052 6.226C3.052 5.81178 2.71622 5.476 2.302 5.476C1.88779 5.476 1.552 5.81178 1.552 6.226C1.552 6.64021 1.88779 6.976 2.302 6.976Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.22595 3.052C6.64017 3.052 6.97595 2.71622 6.97595 2.302C6.97595 1.88779 6.64017 1.552 6.22595 1.552C5.81174 1.552 5.47595 1.88779 5.47595 2.302C5.47595 2.71622 5.81174 3.052 6.22595 3.052Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleHalfDottedClock;
