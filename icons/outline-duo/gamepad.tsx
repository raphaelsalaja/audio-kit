import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad({
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
          d="M16.914 11.986L14.921 5.18699C14.671 4.33499 13.89 3.74899 13.002 3.74899H4.998C4.11 3.74899 3.329 4.33399 3.079 5.18699L1.086 11.986C1.035 12.149 1 12.319 1 12.5C1 13.467 1.784 14.25 2.75 14.25C3.334 14.25 3.848 13.961 4.165 13.522L5.437 11.75H12.561L13.833 13.522C14.151 13.961 14.665 14.25 15.248 14.25C16.214 14.25 16.998 13.467 16.998 12.5C16.998 12.32 16.963 12.15 16.912 11.986H16.914Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 9.5C11.1642 9.5 11.5 9.16421 11.5 8.75C11.5 8.33579 11.1642 8 10.75 8C10.3358 8 10 8.33579 10 8.75C10 9.16421 10.3358 9.5 10.75 9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 7.5C12.6642 7.5 13 7.16421 13 6.75C13 6.33579 12.6642 6 12.25 6C11.8358 6 11.5 6.33579 11.5 6.75C11.5 7.16421 11.8358 7.5 12.25 7.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 6.5V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.5 7.75H5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.914 11.986L14.921 5.18699C14.671 4.33499 13.89 3.74899 13.002 3.74899H4.998C4.11 3.74899 3.329 4.33399 3.079 5.18699L1.086 11.986C1.035 12.149 1 12.319 1 12.5C1 13.467 1.784 14.25 2.75 14.25C3.334 14.25 3.848 13.961 4.165 13.522L5.437 11.75H12.561L13.833 13.522C14.151 13.961 14.665 14.25 15.248 14.25C16.214 14.25 16.998 13.467 16.998 12.5C16.998 12.32 16.963 12.15 16.912 11.986H16.914Z"
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

export default Gamepad;
