import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Broom({
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
          d="M11.2189 12.0482C8.57475 10.4995 6.8151 8.22863 6.10905 7.02393C5.78859 7.20852 5.48144 7.44373 5.197 7.732C3.942 9.003 3.125 9.812 1.75 10C2.048 12.961 3.694 15.256 6.439 16.037C7.067 16.216 7.743 16.07 8.253 15.662C9.25252 14.8633 10.5358 13.528 11.2189 12.0482Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.09601 7.032C6.58401 7.823 7.20701 8.668 8.00001 9.5C9.07401 10.625 10.194 11.448 11.204 12.046"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 1.5L10.376 7.374"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.376 7.374C13.534 10.144 10.299 14.027 8.253 15.662C7.743 16.07 7.067 16.216 6.439 16.037C3.694 15.256 2.048 12.961 1.75 10C3.125 9.812 3.942 9.003 5.197 7.732C6.757 6.151 9 6.166 10.376 7.374Z"
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

export default Broom;
