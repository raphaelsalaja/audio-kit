import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dice6({
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
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 13.25C7.05228 13.25 7.5 12.8023 7.5 12.25C7.5 11.6977 7.05228 11.25 6.5 11.25C5.94772 11.25 5.5 11.6977 5.5 12.25C5.5 12.8023 5.94772 13.25 6.5 13.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 10C7.05228 10 7.5 9.55228 7.5 9C7.5 8.44772 7.05228 8 6.5 8C5.94772 8 5.5 8.44772 5.5 9C5.5 9.55228 5.94772 10 6.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 6.75C7.05228 6.75 7.5 6.30228 7.5 5.75C7.5 5.19772 7.05228 4.75 6.5 4.75C5.94772 4.75 5.5 5.19772 5.5 5.75C5.5 6.30228 5.94772 6.75 6.5 6.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 13.25C12.0523 13.25 12.5 12.8023 12.5 12.25C12.5 11.6977 12.0523 11.25 11.5 11.25C10.9477 11.25 10.5 11.6977 10.5 12.25C10.5 12.8023 10.9477 13.25 11.5 13.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 10C12.0523 10 12.5 9.55228 12.5 9C12.5 8.44772 12.0523 8 11.5 8C10.9477 8 10.5 8.44772 10.5 9C10.5 9.55228 10.9477 10 11.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 6.75C12.0523 6.75 12.5 6.30228 12.5 5.75C12.5 5.19772 12.0523 4.75 11.5 4.75C10.9477 4.75 10.5 5.19772 10.5 5.75C10.5 6.30228 10.9477 6.75 11.5 6.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Dice6;
