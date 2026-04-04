import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudNodes({
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
          d="M7.25 16.25C8.2165 16.25 9 15.466 9 14.5C9 13.534 8.2165 12.75 7.25 12.75C6.2835 12.75 5.5 13.534 5.5 14.5C5.5 15.466 6.2835 16.25 7.25 16.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 9.25V12.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 15.25C12.5335 15.25 11.75 14.466 11.75 13.5C11.75 12.534 12.5335 11.75 13.5 11.75C14.4665 11.75 15.25 12.534 15.25 13.5C15.25 14.466 14.4665 15.25 13.5 15.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.263 12.263L11.043 11.043C10.855 10.855 10.75 10.601 10.75 10.336V9.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.236 9.63921C16.2378 9.59181 16.25 9.5476 16.25 9.5C16.25 7.7639 15.065 6.3179 13.464 5.8911C13.278 3.5769 11.362 1.75 9 1.75C6.515 1.75 4.5 3.7651 4.5 6.25C4.5 6.6001 4.549 6.93599 4.624 7.26289C3.027 7.32999 1.75 8.6369 1.75 10.25C1.75 11.2102 2.2093 12.0552 2.9111 12.6045"
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

export default CloudNodes;
