import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseHeart({
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
          d="M8.395 2.21L3.145 6.2C2.896 6.389 2.75 6.683 2.75 6.996V14.25C2.75 15.355 3.645 16.25 4.75 16.25H8.61229C8.8452 16.25 9.14386 16.1969 9.1896 15.9685C9.19435 15.9448 9.19276 15.9225 9.1822 15.9031C8.91753 15.416 8.70362 14.8644 8.58942 14.25C8.53149 13.9383 8.49922 13.6104 8.499 13.2665C8.49397 11.0225 10.3254 9.26338 12.5123 9.25004C13.0257 9.24689 13.5298 9.3497 13.9979 9.53428C14.3942 9.37802 14.8181 9.28349 15.25 9.25732V6.996C15.25 6.684 15.104 6.389 14.855 6.2L9.605 2.21C9.248 1.938 8.753 1.938 8.395 2.21Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.781 17.197C13.919 17.268 14.08 17.268 14.218 17.197C14.947 16.823 17.249 15.467 17.249 13.263C17.253 12.295 16.458 11.506 15.472 11.5C14.879 11.507 14.328 11.801 13.999 12.286C13.67 11.802 13.118 11.508 12.526 11.5C11.541 11.506 10.746 12.294 10.749 13.263C10.749 15.468 13.053 16.823 13.781 17.197Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 8.5166V6.7461C15.25 6.4341 15.104 6.13889 14.855 5.94999L9.60501 1.96C9.24701 1.688 8.75199 1.688 8.39499 1.96L3.14499 5.94999C2.89599 6.13899 2.75 6.4341 2.75 6.7461V14.25C2.75 15.354 3.645 16.25 4.75 16.25H8.53421"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 17.197C13.919 17.268 14.08 17.268 14.218 17.197C14.947 16.823 17.249 15.467 17.249 13.263C17.253 12.295 16.458 11.506 15.472 11.5C14.879 11.507 14.328 11.801 13.999 12.286C13.67 11.802 13.118 11.508 12.526 11.5C11.541 11.506 10.746 12.294 10.749 13.263C10.749 15.468 13.053 16.823 13.781 17.197Z"
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

export default HouseHeart;
