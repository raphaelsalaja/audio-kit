import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Radar2({
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
          d="M14.1265 3.87347C12.8145 2.56148 11.002 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 8.43687 16.0713 5.75897 15.2597 5.92379L12.1797 9C12.1797 11.0711 11.0711 12.75 9 12.75C6.92893 12.75 5.25 11.0711 5.25 9C5.25 6.92893 6.92893 5.25 9 5.25C10.0355 5.25 10.973 5.66973 11.6516 6.34834L14.1265 3.87347Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M15.7897 6.45261C16.087 7.24511 16.25 8.1035 16.25 9C16.25 13.004 13.004 16.25 9 16.25C4.996 16.25 1.75 13.004 1.75 9C1.75 4.996 4.996 1.75 9 1.75C11.002 1.75 12.815 2.56099 14.127 3.87299"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.7129 9.5296C12.4556 11.3499 10.8913 12.75 9 12.75C6.9289 12.75 5.25 11.0711 5.25 9C5.25 6.9289 6.9289 5.25 9 5.25C10.0355 5.25 10.973 5.6697 11.6516 6.3483"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9L15.75 2.25"
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

export default Radar2;
