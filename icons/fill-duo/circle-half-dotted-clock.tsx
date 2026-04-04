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
          d="M9 4C9.41421 4 9.75 4.33579 9.75 4.75V8.60704L12.6769 10.6334C13.0175 10.8691 13.1024 11.3363 12.8666 11.6769C12.6309 12.0175 12.1637 12.1024 11.8231 11.8666L8.57309 9.61664C8.37074 9.47656 8.25 9.24611 8.25 9V4.75C8.25 4.33579 8.58579 4 9 4Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.25 1.75C8.25 1.33579 8.58579 1 9 1C13.4182 1 17 4.58179 17 9C17 13.4182 13.4182 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25C8.25 15.8358 8.58579 15.5 9 15.5C12.5898 15.5 15.5 12.5898 15.5 9C15.5 5.41021 12.5898 2.5 9 2.5C8.58579 2.5 8.25 2.16421 8.25 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.87299 14.877C4.28699 14.877 4.62299 14.541 4.62299 14.127C4.62299 13.713 4.28699 13.377 3.87299 13.377C3.45899 13.377 3.12299 13.713 3.12299 14.127C3.12299 14.541 3.45899 14.877 3.87299 14.877Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.75 9.75C2.164 9.75 2.5 9.414 2.5 9C2.5 8.586 2.164 8.25 1.75 8.25C1.336 8.25 1 8.586 1 9C1 9.414 1.336 9.75 1.75 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.87299 4.623C4.28699 4.623 4.62299 4.287 4.62299 3.873C4.62299 3.459 4.28699 3.123 3.87299 3.123C3.45899 3.123 3.12299 3.459 3.12299 3.873C3.12299 4.287 3.45899 4.623 3.87299 4.623Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.22601 16.448C6.64001 16.448 6.97601 16.112 6.97601 15.698C6.97601 15.284 6.64001 14.948 6.22601 14.948C5.81201 14.948 5.47601 15.284 5.47601 15.698C5.47601 16.112 5.81201 16.448 6.22601 16.448Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.302 12.524C2.716 12.524 3.052 12.188 3.052 11.774C3.052 11.36 2.716 11.024 2.302 11.024C1.888 11.024 1.552 11.36 1.552 11.774C1.552 12.188 1.888 12.524 2.302 12.524Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.302 6.976C2.716 6.976 3.052 6.64 3.052 6.226C3.052 5.812 2.716 5.476 2.302 5.476C1.888 5.476 1.552 5.812 1.552 6.226C1.552 6.64 1.888 6.976 2.302 6.976Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.22601 3.052C6.64001 3.052 6.97601 2.716 6.97601 2.302C6.97601 1.888 6.64001 1.552 6.22601 1.552C5.81201 1.552 5.47601 1.888 5.47601 2.302C5.47601 2.716 5.81201 3.052 6.22601 3.052Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CircleHalfDottedClock;
