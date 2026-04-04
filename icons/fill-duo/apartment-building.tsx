import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ApartmentBuilding({
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
          d="M9.75445 1.02884C9.27746 0.801705 8.72354 0.801705 8.24655 1.02884L3.4961 3.30106C2.88724 3.59183 2.5 4.20653 2.5 4.87999V16.25C2.5 16.6642 2.83579 17 3.25 17H14.751C15.1652 17 15.501 16.6642 15.501 16.25V4.87999C15.501 4.20523 15.1123 3.59164 14.5057 3.30142L9.75562 1.0294L9.75445 1.02884Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 6C9.41421 6 9.75 6.33579 9.75 6.75V7.25C9.75 7.66421 9.41421 8 9 8C8.58579 8 8.25 7.66421 8.25 7.25V6.75C8.25 6.33579 8.58579 6 9 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 6C6.66421 6 7 6.33579 7 6.75V7.25C7 7.66421 6.66421 8 6.25 8C5.83579 8 5.5 7.66421 5.5 7.25V6.75C5.5 6.33579 5.83579 6 6.25 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.75 6C12.1642 6 12.5 6.33579 12.5 6.75V7.25C12.5 7.66421 12.1642 8 11.75 8C11.3358 8 11 7.66421 11 7.25V6.75C11 6.33579 11.3358 6 11.75 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 9.25C9.41421 9.25 9.75 9.58579 9.75 10V10.5C9.75 10.9142 9.41421 11.25 9 11.25C8.58579 11.25 8.25 10.9142 8.25 10.5V10C8.25 9.58579 8.58579 9.25 9 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 9.25C6.66421 9.25 7 9.58579 7 10V10.5C7 10.9142 6.66421 11.25 6.25 11.25C5.83579 11.25 5.5 10.9142 5.5 10.5V10C5.5 9.58579 5.83579 9.25 6.25 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.75 9.25C12.1642 9.25 12.5 9.58579 12.5 10V10.5C12.5 10.9142 12.1642 11.25 11.75 11.25C11.3358 11.25 11 10.9142 11 10.5V10C11 9.58579 11.3358 9.25 11.75 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 13.75C9.75 13.3358 9.41421 13 9 13C8.58579 13 8.25 13.3358 8.25 13.75V15.5H1.75C1.33579 15.5 1 15.8358 1 16.25C1 16.6642 1.33579 17 1.75 17H9H16.25C16.6642 17 17 16.6642 17 16.25C17 15.8358 16.6642 15.5 16.25 15.5H9.75V13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ApartmentBuilding;
