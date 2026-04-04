import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FoodDeliveryBox({
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
          d="M16.25 12.25L14.25 8.75H3.75L1.75 12.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 12.25H1.75V15.75H16.25V12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 12.25L14.25 8.75H3.75L1.75 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.00002 0.75C8.97802 1.381 8.83402 2.133 8.32802 2.75C7.98102 3.174 7.69201 3.254 7.35901 3.672C7.03401 4.08 6.74102 4.717 6.75002 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 2.75C11.735 3.129 11.639 3.58 11.302 3.95C11.07 4.204 10.878 4.252 10.656 4.503C10.439 4.748 10.244 5.13 10.25 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 14C9.966 14 10.75 13.217 10.75 12.25H7.25C7.25 13.217 8.034 14 9 14Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FoodDeliveryBox;
