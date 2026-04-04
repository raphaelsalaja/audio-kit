import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RestaurantMenu({
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
          d="M8 7C8.828 7 9.5 6.3284 9.5 5.5C9.5 4.6716 8.828 4 8 4C7.172 4 6.5 4.6716 6.5 5.5C6.5 6.3284 7.172 7 8 7Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M4.14529 2.6558L11.6453 1.8663C12.2357 1.8041 12.75 2.2671 12.75 2.8608V15.1392C12.75 15.7329 12.2358 16.1959 11.6453 16.1337L4.14529 15.3442C3.63639 15.2906 3.25 14.8615 3.25 14.3497V3.6503C3.25 3.1385 3.63639 2.7094 4.14529 2.6558Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 2.75V15.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 9.25H10"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 12.25L10 12.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default RestaurantMenu;
