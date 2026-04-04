import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad2({
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
          d="M16.914 12.986L14.921 6.18699C14.671 5.33499 13.89 4.74899 13.002 4.74899H4.998C4.11 4.74899 3.329 5.33399 3.079 6.18699L1.086 12.986C1.035 13.149 1 13.319 1 13.5C1 14.467 1.784 15.25 2.75 15.25C3.334 15.25 3.848 14.961 4.165 14.522L5.437 12.75H12.561L13.833 14.522C14.151 14.961 14.665 15.25 15.248 15.25C16.214 15.25 16.998 14.467 16.998 13.5C16.998 13.32 16.963 13.15 16.912 12.986H16.914Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.75V4C9 3.034 9.784 2.25 10.75 2.25H12.5C13.293 2.25 13.962 1.723 14.177 1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 10.5C11.1642 10.5 11.5 10.1642 11.5 9.75C11.5 9.33579 11.1642 9 10.75 9C10.3358 9 10 9.33579 10 9.75C10 10.1642 10.3358 10.5 10.75 10.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 8.5C12.6642 8.5 13 8.16421 13 7.75C13 7.33579 12.6642 7 12.25 7C11.8358 7 11.5 7.33579 11.5 7.75C11.5 8.16421 11.8358 8.5 12.25 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 7.5V10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.5 8.75H5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.914 12.986L14.921 6.18699C14.671 5.33499 13.89 4.74899 13.002 4.74899H4.998C4.11 4.74899 3.329 5.33399 3.079 6.18699L1.086 12.986C1.035 13.149 1 13.319 1 13.5C1 14.467 1.784 15.25 2.75 15.25C3.334 15.25 3.848 14.961 4.165 14.522L5.437 12.75H12.561L13.833 14.522C14.151 14.961 14.665 15.25 15.248 15.25C16.214 15.25 16.998 14.467 16.998 13.5C16.998 13.32 16.963 13.15 16.912 12.986H16.914Z"
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

export default Gamepad2;
