import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartStackedArea({
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
          d="M1.75 11.2472L4.71561 9.1854C4.89424 9.06121 5.13268 9.06678 5.30531 9.19918L8.73447 11.8292C8.87619 11.9379 9.06514 11.9628 9.23015 11.8944L16.25 8.98574V12.25C16.25 13.355 15.355 14.25 14.25 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V11.2472Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 11.25L4.704 9.205C4.881 9.082 5.116 9.087 5.289 9.216L8.773 11.829C8.914 11.935 9.101 11.959 9.264 11.891L16.251 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V8.457C1.75 8.324 1.803 8.197 1.896 8.103L4.705 5.294C4.875 5.124 5.143 5.099 5.342 5.236L8.716 7.555C8.887 7.672 9.112 7.672 9.283 7.555L15.466 3.291C15.798 3.062 16.25 3.3 16.25 3.703V12.25C16.25 13.355 15.355 14.25 14.25 14.25Z"
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

export default ChartStackedArea;
