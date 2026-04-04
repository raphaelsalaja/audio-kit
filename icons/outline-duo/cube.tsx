import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cube({
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
          d="M3.01724 5.52867L9.0105 8.99844L14.9893 5.53828C15.158 5.83469 15.251 6.17423 15.251 6.52699V11.473C15.251 12.186 14.871 12.845 14.254 13.203L10.004 15.668C9.383 16.028 8.618 16.028 7.997 15.668L3.747 13.203C3.13 12.845 2.75 12.186 2.75 11.473V6.52699C2.75 6.17041 2.84504 5.82734 3.01724 5.52867Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.983 5.53L9 9L3.017 5.53"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.938V9"
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

export default Cube;
