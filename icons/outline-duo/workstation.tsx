import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Workstation({
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
          d="M11.25 1.75H6.75C6.19772 1.75 5.75 2.19772 5.75 2.75V5.25C5.75 5.80228 6.19772 6.25 6.75 6.25H11.25C11.8023 6.25 12.25 5.80228 12.25 5.25V2.75C12.25 2.19772 11.8023 1.75 11.25 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 10.25H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 10.25L4 15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 10.25L14 15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 1.75H6.75C6.19772 1.75 5.75 2.19772 5.75 2.75V5.25C5.75 5.80228 6.19772 6.25 6.75 6.25H11.25C11.8023 6.25 12.25 5.80228 12.25 5.25V2.75C12.25 2.19772 11.8023 1.75 11.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 7.25C12.56 7.25 12 7.81 12 8.5H14.5C14.5 7.81 13.94 7.25 13.25 7.25Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Workstation;
