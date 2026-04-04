import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxScale({
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
        <circle
          cx="13.75"
          cy="4.5"
          fill={secondaryfill}
          fillOpacity="0.4"
          r="3.5"
        />
        <path
          d="M2 7.75C2 6.78379 2.78379 6 3.75 6H7.75C8.71621 6 9.5 6.78379 9.5 7.75V11.75C9.5 12.7162 8.71621 13.5 7.75 13.5H3.75C2.78379 13.5 2 12.7162 2 11.75V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 6V9C6.5 9.41421 6.16421 9.75 5.75 9.75C5.33579 9.75 5 9.41421 5 9V6H6.5Z"
          fill={fill}
        />
        <path
          d="M15.7368 2.51319C16.0297 2.80608 16.0297 3.28096 15.7368 3.57385L14.2803 5.03035C13.9874 5.32324 13.5126 5.32324 13.2197 5.03035C12.9268 4.73745 12.9268 4.26258 13.2197 3.96969L14.6762 2.51319C14.9691 2.22029 15.4439 2.22029 15.7368 2.51319Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.75 7.99998C14.0074 7.99998 14.2584 7.97218 14.5 7.91943V14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H1.75C1.33579 16 1 15.6642 1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H13V7.91943C13.2416 7.97218 13.4926 7.99998 13.75 7.99998Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BoxScale;
