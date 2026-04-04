import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HourglassClock({
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
          d="M4.25 15.75C4.25 11.89 4.807 10.294 6.71 9C4.807 7.706 4.25 6.11 4.25 2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.29 9C12.193 7.706 12.75 6.11 12.75 2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 2.25H13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 15.75H7.4996"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 10C11.2939 10 9.5 11.7944 9.5 14C9.5 16.2056 11.2939 18 13.5 18C15.7061 18 17.5 16.2056 17.5 14C17.5 11.7944 15.7061 10 13.5 10ZM15.8125 14.9502C15.6934 15.2398 15.4141 15.415 15.1191 15.415C15.0234 15.415 14.9277 15.3969 14.8339 15.3588L13.2148 14.6938C12.9336 14.5781 12.75 14.3042 12.75 14V12.25C12.75 11.8359 13.0859 11.5 13.5 11.5C13.9141 11.5 14.25 11.8359 14.25 12.25V13.4971L15.4043 13.9712C15.7871 14.1284 15.9707 14.5669 15.8125 14.9502Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HourglassClock;
