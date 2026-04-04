import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LiveOff({
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
          d="M5.995 12.005C5.226 11.236 4.75 10.173 4.75 9C4.75 6.653 6.653 4.75 9 4.75C10.174 4.75 11.236 5.226 12.005 5.995"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 9C13.25 11.347 11.347 13.25 9 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2.5C9.414 2.5 9.75 2.164 9.75 1.75C9.75 1.336 9.414 1 9 1C8.586 1 8.25 1.336 8.25 1.75C8.25 2.164 8.586 2.5 9 2.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M16.25 9.75C16.664 9.75 17 9.414 17 9C17 8.586 16.664 8.25 16.25 8.25C15.836 8.25 15.5 8.586 15.5 9C15.5 9.414 15.836 9.75 16.25 9.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M14.127 14.877C14.541 14.877 14.877 14.541 14.877 14.127C14.877 13.713 14.541 13.377 14.127 13.377C13.713 13.377 13.377 13.713 13.377 14.127C13.377 14.541 13.713 14.877 14.127 14.877Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9 17C9.414 17 9.75 16.664 9.75 16.25C9.75 15.836 9.414 15.5 9 15.5C8.586 15.5 8.25 15.836 8.25 16.25C8.25 16.664 8.586 17 9 17Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M1.75 9.75C2.164 9.75 2.5 9.414 2.5 9C2.5 8.586 2.164 8.25 1.75 8.25C1.336 8.25 1 8.586 1 9C1 9.414 1.336 9.75 1.75 9.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M3.87299 4.623C4.28699 4.623 4.62299 4.287 4.62299 3.873C4.62299 3.459 4.28699 3.123 3.87299 3.123C3.45899 3.123 3.12299 3.459 3.12299 3.873C3.12299 4.287 3.45899 4.623 3.87299 4.623Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11.774 3.052C12.188 3.052 12.524 2.716 12.524 2.302C12.524 1.888 12.188 1.552 11.774 1.552C11.36 1.552 11.024 1.888 11.024 2.302C11.024 2.716 11.36 3.052 11.774 3.052Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.698 6.976C16.112 6.976 16.448 6.64 16.448 6.226C16.448 5.812 16.112 5.476 15.698 5.476C15.284 5.476 14.948 5.812 14.948 6.226C14.948 6.64 15.284 6.976 15.698 6.976Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.698 12.524C16.112 12.524 16.448 12.188 16.448 11.774C16.448 11.36 16.112 11.024 15.698 11.024C15.284 11.024 14.948 11.36 14.948 11.774C14.948 12.188 15.284 12.524 15.698 12.524Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11.774 16.448C12.188 16.448 12.524 16.112 12.524 15.698C12.524 15.284 12.188 14.948 11.774 14.948C11.36 14.948 11.024 15.284 11.024 15.698C11.024 16.112 11.36 16.448 11.774 16.448Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.22601 16.448C6.64001 16.448 6.97601 16.112 6.97601 15.698C6.97601 15.284 6.64001 14.948 6.22601 14.948C5.81201 14.948 5.47601 15.284 5.47601 15.698C5.47601 16.112 5.81201 16.448 6.22601 16.448Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2.302 12.524C2.716 12.524 3.052 12.188 3.052 11.774C3.052 11.36 2.716 11.024 2.302 11.024C1.888 11.024 1.552 11.36 1.552 11.774C1.552 12.188 1.888 12.524 2.302 12.524Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2.302 6.976C2.716 6.976 3.052 6.64 3.052 6.226C3.052 5.812 2.716 5.476 2.302 5.476C1.888 5.476 1.552 5.812 1.552 6.226C1.552 6.64 1.888 6.976 2.302 6.976Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.22601 3.052C6.64001 3.052 6.97601 2.716 6.97601 2.302C6.97601 1.888 6.64001 1.552 6.22601 1.552C5.81201 1.552 5.47601 1.888 5.47601 2.302C5.47601 2.716 5.81201 3.052 6.22601 3.052Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2 16L16 2"
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

export default LiveOff;
