import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FoodDeliveryTime({
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
          d="M8.27734 5.66895C8.80672 4.86619 9.65952 4.26889 10.6899 4.47101L11.1424 4.11672C10.2047 2.68668 8.58795 1.74219 6.75 1.74219C3.85043 1.74219 1.5 4.09261 1.5 6.99219C1.50009 9.76147 3.32858 12.0263 6.03281 12.2243C6.15934 12.2336 6.28904 12.218 6.40137 12.1591C6.44889 12.1341 6.48702 12.1075 6.48555 12.0871C6.47336 11.9166 6.4939 11.7401 6.50781 11.5684L6.53809 11.2363C6.73972 9.29217 7.33796 7.38239 8.27734 5.66895Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.25 16.25V6.75C9.915 7.361 9.55 8.146 9.259 9.094C8.947 10.11 8.809 11.022 8.75 11.75L10.25 13.258"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 12.155C3.329 11.688 1.5 9.558 1.5 7C1.5 4.101 3.851 1.75 6.75 1.75C8.4274 1.75 9.9218 2.5371 10.8828 3.7622"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 4V7L4.25 8.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 6.75V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 6.75L16.875 9.003C16.943 10.223 15.972 11.25 14.75 11.25C13.528 11.25 12.557 10.224 12.625 9.003L12.75 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.25V16.25"
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

export default FoodDeliveryTime;
