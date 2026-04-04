import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUserSparkle2({
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
          d="M5.13693 15.1362C5.61065 13.4484 7.16079 12.2108 8.99999 12.2108C10.8392 12.2108 12.3893 13.4484 12.863 15.1362C11.7447 15.8417 10.42 16.25 8.99999 16.25C7.57996 16.25 6.25528 15.8417 5.13693 15.1362Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 9.75C10.1046 9.75 11 8.85457 11 7.75C11 6.64543 10.1046 5.75 9 5.75C7.89543 5.75 7 6.64543 7 7.75C7 8.85457 7.89543 9.75 9 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9.75C10.1046 9.75 11 8.85457 11 7.75C11 6.64543 10.1046 5.75 9 5.75C7.89543 5.75 7 6.64543 7 7.75C7 8.85457 7.89543 9.75 9 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.15399 15.147C5.63299 13.474 7.17299 12.25 8.99999 12.25C10.827 12.25 12.367 13.474 12.846 15.147"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.9915 1.82739C9.6665 1.78219 9.3376 1.75049 9 1.75049C4.996 1.75049 1.75 4.99659 1.75 9.00049C1.75 13.0044 4.996 16.2505 9 16.2505C13.004 16.2505 16.25 13.0044 16.25 9.00049C16.25 8.64279 16.2136 8.29489 16.1624 7.95189"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.589 2.3885L16.074 1.8825L15.569 0.3675C15.405 -0.1225 14.594 -0.1225 14.43 0.3675L13.925 1.8825L12.41 2.3885C12.165 2.4695 12 2.6995 12 2.9575C12 3.2155 12.165 3.4455 12.41 3.5265L13.925 4.0325L14.43 5.5475C14.512 5.7925 14.742 5.9575 15 5.9575C15.258 5.9575 15.487 5.7925 15.57 5.5475L16.075 4.0325L17.59 3.5265C17.835 3.4455 18 3.2155 18 2.9575C18 2.6995 17.834 2.4705 17.589 2.3885Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleUserSparkle2;
