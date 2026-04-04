import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserShortHair4({
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
          d="M9 10.25C11.0711 10.25 12.75 8.57107 12.75 6.5C12.75 4.42893 11.0711 2.75 9 2.75C6.92893 2.75 5.25 4.42893 5.25 6.5C5.25 8.57107 6.92893 10.25 9 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.615 7.5C12.703 7.182 12.75 6.846 12.75 6.5C12.75 4.429 11.071 2.75 9 2.75C6.929 2.75 5.25 4.429 5.25 6.5C5.25 6.846 5.297 7.182 5.385 7.5H5.766C5.757 6.674 6.425 6 7.25 6H10.75C11.576 6 12.243 6.674 12.234 7.5H12.615Z"
          fill={fill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 10.25C11.0711 10.25 12.75 8.57107 12.75 6.5C12.75 4.42893 11.0711 2.75 9 2.75C6.92893 2.75 5.25 4.42893 5.25 6.5C5.25 8.57107 6.92893 10.25 9 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.953 16C4.251 14.042 6.475 12.75 9 12.75C11.525 12.75 13.749 14.041 15.047 16"
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

export default UserShortHair4;
