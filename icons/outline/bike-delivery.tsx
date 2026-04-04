import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BikeDelivery({
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
          d="M14.25 15.75C15.907 15.75 17.25 14.4069 17.25 12.75C17.25 11.0931 15.907 9.75 14.25 9.75C12.593 9.75 11.25 11.0931 11.25 12.75C11.25 14.4069 12.593 15.75 14.25 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.75C5.407 15.75 6.75 14.4069 6.75 12.75C6.75 11.0931 5.407 9.75 3.75 9.75C2.093 9.75 0.75 11.0931 0.75 12.75C0.75 14.4069 2.093 15.75 3.75 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.4534 8.08649L7.03119 7.28419C6.85829 6.95559 6.5176 6.74989 6.1463 6.74989H4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 12.75L10.594 3.75H14.375C15.1344 3.75 15.75 4.3656 15.75 5.125C15.75 5.8844 15.1344 6.5 14.375 6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 1.75H2.25C1.698 1.75 1.25 2.1977 1.25 2.75V5.75C1.25 6.3023 1.698 6.75 2.25 6.75H5.25C5.802 6.75 6.25 6.3023 6.25 5.75V2.75C6.25 2.1977 5.802 1.75 5.25 1.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 1.75V3.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 12.75C7.3434 11.5059 10.0833 9.63481 11.97 7.13721"
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

export default BikeDelivery;
