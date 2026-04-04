import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad6({
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
          d="M13.25 5.75H4.75C2.541 5.75 0.75 7.541 0.75 9.75C0.75 11.959 2.541 13.75 4.75 13.75C5.758 13.75 6.667 13.365 7.37 12.75H10.629C11.332 13.365 12.242 13.75 13.249 13.75C15.458 13.75 17.249 11.959 17.249 9.75C17.249 7.541 15.458 5.75 13.249 5.75H13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 9.75C14.6642 9.75 15 9.41421 15 9C15 8.58579 14.6642 8.25 14.25 8.25C13.8358 8.25 13.5 8.58579 13.5 9C13.5 9.41421 13.8358 9.75 14.25 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.75 11.25C13.1642 11.25 13.5 10.9142 13.5 10.5C13.5 10.0858 13.1642 9.75 12.75 9.75C12.3358 9.75 12 10.0858 12 10.5C12 10.9142 12.3358 11.25 12.75 11.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.75 8.25V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 9.75H3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 5.75H4.75C2.541 5.75 0.75 7.541 0.75 9.75C0.75 11.959 2.541 13.75 4.75 13.75C5.758 13.75 6.667 13.365 7.37 12.75H10.629C11.332 13.365 12.242 13.75 13.249 13.75C15.458 13.75 17.249 11.959 17.249 9.75C17.249 7.541 15.458 5.75 13.249 5.75H13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.75V5C9 4.034 9.784 3.25 10.75 3.25H12.5C13.466 3.25 14.25 2.466 14.25 1.5"
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

export default Gamepad6;
