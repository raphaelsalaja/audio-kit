import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagOutForDelivery({
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
          d="M6.33401 4.75H13.667C14.704 4.75 15.57 5.543 15.659 6.577L16.311 14.077C16.413 15.246 15.491 16.25 14.319 16.25H5.68101C4.50801 16.25 3.62178 15.245 3.72378 14.077L3.73047 14H6.75001C7.99265 14 9.00001 12.9926 9.00001 11.75C9.00001 11.3933 8.91702 11.0561 8.7693 10.7564C9.49969 10.3846 10 9.62574 10 8.75C10 7.50736 8.99265 6.5 7.75001 6.5H4.61764C4.74282 5.50389 5.32291 4.75 6.33401 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.75 4.75V3C7.75 1.757 8.757 0.75 10 0.75C11.243 0.75 12.25 1.757 12.25 3V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 11.75H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 8.75H7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.6013 5.7494C4.9486 5.1487 5.59802 4.75 6.33302 4.75H13.666C14.703 4.75 15.569 5.543 15.658 6.577L16.31 14.077C16.412 15.246 15.49 16.25 14.318 16.25H5.68101C4.74191 16.25 3.9644 15.6064 3.7438 14.7503"
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

export default BagOutForDelivery;
