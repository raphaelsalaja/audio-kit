import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Joystick2({
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
          d="M6 4.5C6 2.84327 7.3427 1.5 9 1.5C10.6573 1.5 12 2.84327 12 4.5C12 6.15673 10.6573 7.5 9 7.5C7.3427 7.5 6 6.15673 6 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 6.22902C9.41421 6.22902 9.75 6.56481 9.75 6.97902V10.25C9.75 10.6642 9.41421 11 9 11C8.58579 11 8.25 10.6642 8.25 10.25V6.97902C8.25 6.56481 8.58579 6.22902 9 6.22902Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 14.25C1.5 13.0073 2.50792 12 3.75 12H14.25C15.4921 12 16.5 13.0073 16.5 14.25C16.5 15.4927 15.4921 16.5 14.25 16.5H3.75C2.50792 16.5 1.5 15.4927 1.5 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.5 11.25C13.5 10.8358 13.1642 10.5 12.75 10.5C12.3358 10.5 12 10.8358 12 11.25V12H13.5V11.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Joystick2;
