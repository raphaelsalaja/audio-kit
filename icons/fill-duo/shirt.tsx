import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shirt({
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
          d="M3.75 2C2.23079 2 1 3.23079 1 4.75V13.25C1 14.7692 2.23079 16 3.75 16H14.25C15.7692 16 17 14.7692 17 13.25V4.75C17 3.23079 15.7692 2 14.25 2H13L9 6L5 2H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11 11.25C11 10.8358 11.3358 10.5 11.75 10.5H13.75C14.1642 10.5 14.5 10.8358 14.5 11.25C14.5 11.6642 14.1642 12 13.75 12H11.75C11.3358 12 11 11.6642 11 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.01768 1.50768C5.02659 1.49859 5.03567 1.48977 5.04493 1.48123C5.35878 1.18303 5.78309 1 6.25 1H11.75C12.7162 1 13.5 1.78379 13.5 2.75V8.25C13.5 8.54342 13.3289 8.80989 13.0621 8.93199C12.7953 9.05408 12.4818 9.00937 12.2597 8.81756L9.75 6.64959V16H8.25V6.64929L5.74032 8.81753C5.51828 9.00936 5.20476 9.05409 4.93794 8.932C4.67112 8.80991 4.5 8.54343 4.5 8.25V2.75C4.5 2.26435 4.69802 1.82479 5.01768 1.50768ZM8.9997 5.01931L11.7583 2.5H6.24089L8.9997 5.01931Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Shirt;
