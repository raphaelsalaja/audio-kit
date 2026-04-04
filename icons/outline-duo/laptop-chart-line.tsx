import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopChartLine({
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
          d="M4.25 14.75C3.145 14.75 2.25 13.855 2.25 12.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H13.75C14.855 2.75 15.75 3.645 15.75 4.75V12.75C15.75 13.855 14.855 14.75 13.75 14.75"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 7.5L10.604 9.646C10.409 9.841 10.092 9.841 9.89701 9.646L8.10401 7.853C7.90901 7.658 7.59201 7.658 7.39701 7.853L5.25101 9.999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 14.75C3.145 14.75 2.25 13.855 2.25 12.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H13.75C14.855 2.75 15.75 3.645 15.75 4.75V12.75C15.75 13.855 14.855 14.75 13.75 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 14.75H17.25"
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

export default LaptopChartLine;
