import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Spatial({
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
          d="M3.747 4.797L7.997 2.332C8.618 1.972 9.383 1.972 10.004 2.332L14.254 4.797C14.871 5.155 15.251 5.814 15.251 6.527V11.473C15.251 12.186 14.871 12.845 14.254 13.203L10.004 15.668C9.383 16.028 8.618 16.028 7.997 15.668L3.747 13.203C3.13 12.845 2.75 12.186 2.75 11.473V6.527C2.75 5.814 3.13 5.155 3.747 4.797ZM5.73274 7.13642L9.01599 5.23164L12.2742 7.13642V10.8959L9.01599 12.7505L5.7578 10.8708L5.73274 7.13642Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 3.635V10.876"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 9.144L9 12.753"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.979 14.497L12.25 10.876"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 14.365V7.124"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.856L9 5.247"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.021 3.503L5.75 7.124"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.997 2.332L3.747 4.797C3.13 5.155 2.75 5.814 2.75 6.527V11.473C2.75 12.186 3.13 12.845 3.747 13.203L7.997 15.668C8.618 16.028 9.383 16.028 10.004 15.668L14.254 13.203C14.871 12.845 15.251 12.186 15.251 11.473V6.527C15.251 5.814 14.871 5.155 14.254 4.797L10.004 2.332C9.383 1.972 8.618 1.972 7.997 2.332Z"
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

export default Spatial;
