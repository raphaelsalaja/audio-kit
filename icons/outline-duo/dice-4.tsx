import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dice4({
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
          d="M11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11 12C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7 12C7.55228 12 8 11.5523 8 11C8 10.4477 7.55228 10 7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Dice4;
