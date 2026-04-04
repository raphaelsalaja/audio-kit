import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlugSensor({
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
          d="M12.25 12.25V13C12.25 14.795 10.795 16.25 9 16.25C7.205 16.25 5.75 14.795 5.75 13V12.25C5.75 11.974 5.974 11.75 6.25 11.75H11.75C12.026 11.75 12.25 11.974 12.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.995 5.995C7.652 4.338 10.348 4.338 12.005 5.995"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 11.75V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 11.75V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.728 13.433C15.679 12.206 16.25 10.672 16.25 9C16.25 4.996 13.004 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.672 2.321 12.207 3.272 13.433"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 12.25V13C12.25 14.795 10.795 16.25 9 16.25C7.205 16.25 5.75 14.795 5.75 13V12.25C5.75 11.974 5.974 11.75 6.25 11.75H11.75C12.026 11.75 12.25 11.974 12.25 12.25Z"
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

export default PlugSensor;
