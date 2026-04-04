import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShippingContainer({
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
          d="M8.54441 1.15423C8.81333 0.948589 9.18667 0.948589 9.45559 1.15423L13.7056 4.40423C14.0346 4.65585 14.0974 5.12655 13.8458 5.45559C13.5942 5.78462 13.1234 5.84738 12.7944 5.59577L9 2.69416L5.20559 5.59577C4.87655 5.84738 4.40585 5.78462 4.15423 5.45559C3.90262 5.12655 3.96538 4.65585 4.29441 4.40423L8.54441 1.15423Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.75 5C2.16421 5 2.5 5.33579 2.5 5.75V7H15.5V5.75C15.5 5.33579 15.8358 5 16.25 5C16.6642 5 17 5.33579 17 5.75V13.25C17 14.7692 15.7692 16 14.25 16H3.75C2.23079 16 1 14.7692 1 13.25V5.75C1 5.33579 1.33579 5 1.75 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.25 9.25C5.66421 9.25 6 9.58579 6 10V13C6 13.4142 5.66421 13.75 5.25 13.75C4.83579 13.75 4.5 13.4142 4.5 13V10C4.5 9.58579 4.83579 9.25 5.25 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 9.25C9.41421 9.25 9.75 9.58579 9.75 10V13C9.75 13.4142 9.41421 13.75 9 13.75C8.58579 13.75 8.25 13.4142 8.25 13V10C8.25 9.58579 8.58579 9.25 9 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.75 9.25C13.1642 9.25 13.5 9.58579 13.5 10V13C13.5 13.4142 13.1642 13.75 12.75 13.75C12.3358 13.75 12 13.4142 12 13V10C12 9.58579 12.3358 9.25 12.75 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ShippingContainer;
