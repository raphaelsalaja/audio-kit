import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FoodDeliveryBag({
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
          d="M12.667 4.75H5.334C4.297 4.75 3.431 5.543 3.341 6.577L2.689 14.077C2.587 15.245 3.508 16.25 4.681 16.25H13.319C14.491 16.25 15.413 15.246 15.311 14.077L14.659 6.577C14.57 5.543 13.704 4.75 12.667 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 8.25V10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 8.25L11.4741 11.0949C11.5657 12.2578 10.6468 13.252 9.4803 13.252H8.5197C7.3532 13.252 6.43429 12.2578 6.52589 11.0949L6.75 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 4.75V3C6.75 1.757 7.757 0.75 9 0.75C10.243 0.75 11.25 1.757 11.25 3V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.00001 16.25H4.681C3.508 16.25 2.587 15.245 2.689 14.077L3.34101 6.577C3.43101 5.543 4.297 4.75 5.334 4.75H12.667C13.704 4.75 14.57 5.543 14.659 6.577L15.311 14.077C15.413 15.246 14.491 16.25 13.319 16.25H12"
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

export default FoodDeliveryBag;
