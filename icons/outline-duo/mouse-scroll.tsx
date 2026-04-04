import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MouseScroll({
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
          d="M7.25 2.75H5.25C3.59315 2.75 2.25 4.09315 2.25 5.75V12.25C2.25 13.9069 3.59315 15.25 5.25 15.25H7.25C8.90685 15.25 10.25 13.9069 10.25 12.25V5.75C10.25 4.09315 8.90685 2.75 7.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 10.75V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 13.25L15.25 15.25L17.25 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.25V2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 4.75L15.25 2.75L17.25 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 2.75H5.25C3.59315 2.75 2.25 4.09315 2.25 5.75V12.25C2.25 13.9069 3.59315 15.25 5.25 15.25H7.25C8.90685 15.25 10.25 13.9069 10.25 12.25V5.75C10.25 4.09315 8.90685 2.75 7.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 6.25V8.75"
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

export default MouseScroll;
