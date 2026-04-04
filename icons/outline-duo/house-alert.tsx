import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseAlert({
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
          d="M3.145 5.94999L8.395 1.96C8.753 1.688 9.248 1.688 9.605 1.96L14.855 5.94999C15.104 6.13899 15.25 6.434 15.25 6.746V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.746C2.75 6.433 2.896 6.13899 3.145 5.94999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.145 5.94999L8.395 1.96C8.753 1.688 9.248 1.688 9.605 1.96L14.855 5.94999C15.104 6.13899 15.25 6.434 15.25 6.746V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.746C2.75 6.433 2.896 6.13899 3.145 5.94999Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.25V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 14C9.5523 14 10 13.5523 10 13C10 12.4477 9.5523 12 9 12C8.4477 12 8 12.4477 8 13C8 13.5523 8.4477 14 9 14Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HouseAlert;
