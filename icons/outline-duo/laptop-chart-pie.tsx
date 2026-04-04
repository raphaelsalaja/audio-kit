import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopChartPie({
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
          d="M2.25 12.75C2.25 13.855 3.145 14.75 4.25 14.75H13.75C14.855 14.75 15.75 13.855 15.75 12.75V4.75C15.75 3.645 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.645 2.25 4.75V12.75ZM11.5 8.75C11.5 10.1307 10.3807 11.25 9 11.25C7.61929 11.25 6.5 10.1307 6.5 8.75C6.5 7.36929 7.61929 6.25 9 6.25C10.3807 6.25 11.5 7.36929 11.5 8.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 11.25C10.3807 11.25 11.5 10.1307 11.5 8.75C11.5 7.36929 10.3807 6.25 9 6.25C7.61929 6.25 6.5 7.36929 6.5 8.75C6.5 10.1307 7.61929 11.25 9 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.25V8.75H11.5C11.5 7.369 10.381 6.25 9 6.25Z"
          fill={fill}
          stroke="none"
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

export default LaptopChartPie;
