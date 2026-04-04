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
          d="M7.25002 12.75C7.72602 12.75 8.1565 12.9414 8.472 13.25H11.7752C11.8975 12.4033 12.6192 11.75 13.5 11.75C14.0466 11.75 14.5286 12.0061 14.8495 12.3987C15.6966 11.7105 16.25 10.6738 16.25 9.5C16.25 7.981 15.2939 6.5845 13.8721 6.0249C13.6299 5.9297 13.4541 5.71581 13.4082 5.46001C13.0283 3.34481 11.1328 1.75 9.00002 1.75C6.51862 1.75 4.50002 3.7686 4.50002 6.25C4.50002 6.3564 4.50392 6.4639 4.51372 6.5737C4.54592 6.9365 4.31251 7.27 3.96101 7.3642C2.65921 7.7143 1.75012 8.90079 1.75012 10.2499C1.75012 11.9042 3.09581 13.2499 4.75011 13.2499H6.02812C6.34362 12.9413 6.77402 12.75 7.25002 12.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 16.25C8.2165 16.25 9 15.466 9 14.5C9 13.534 8.2165 12.75 7.25 12.75C6.2835 12.75 5.5 13.534 5.5 14.5C5.5 15.466 6.2835 16.25 7.25 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 9.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 15.25C12.5335 15.25 11.75 14.466 11.75 13.5C11.75 12.534 12.5335 11.75 13.5 11.75C14.4665 11.75 15.25 12.534 15.25 13.5C15.25 14.466 14.4665 15.25 13.5 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.263 12.263L11.043 11.043C10.855 10.855 10.75 10.601 10.75 10.336V9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.236 9.63921C16.2378 9.59181 16.25 9.5476 16.25 9.5C16.25 7.7639 15.065 6.3179 13.464 5.8911C13.278 3.5769 11.362 1.75 9 1.75C6.515 1.75 4.5 3.7651 4.5 6.25C4.5 6.6001 4.54899 6.93599 4.62399 7.26289C3.02699 7.32999 1.75 8.6369 1.75 10.25C1.75 11.2102 2.2093 12.0552 2.9111 12.6045"
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
