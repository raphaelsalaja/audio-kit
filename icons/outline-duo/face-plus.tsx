import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FacePlus({
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
          d="M10.5251 2.30518C10.1974 2.69606 10 3.19998 10 3.75C10 4.99264 11.0074 6 12.25 6H12.5V6.25C12.5 7.49264 13.5074 8.5 14.75 8.5C15.1614 8.5 15.5471 8.38956 15.8789 8.19671C16.442 7.96904 16.25 8.49319 16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75C9.61971 1.75 10.8682 1.4993 10.5251 2.30518Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.25 11.758C10.778 12.504 9.946 13 9 13C8.054 13 7.222 12.504 6.75 11.758"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.75 1.25V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 3.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.95869 1.8155C9.64539 1.7729 9.32601 1.75 9.00101 1.75C4.99701 1.75 1.75101 4.996 1.75101 9C1.75101 13.004 4.99701 16.25 9.00101 16.25C13.005 16.25 16.251 13.004 16.251 9C16.251 8.9496 16.2505 8.8992 16.2494 8.849"
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

export default FacePlus;
