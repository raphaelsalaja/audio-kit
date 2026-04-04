import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shapes({
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
          d="M9.25 10.75H5.75C5.19772 10.75 4.75 11.1977 4.75 11.75V15.25C4.75 15.8023 5.19772 16.25 5.75 16.25H9.25C9.80228 16.25 10.25 15.8023 10.25 15.25V11.75C10.25 11.1977 9.80228 10.75 9.25 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.81801 1.99L1.18901 6.49799C0.995008 6.831 1.23501 7.24999 1.62101 7.24999H6.87901C7.26501 7.24999 7.50501 6.831 7.31101 6.49799L4.68201 1.99C4.48901 1.659 4.01101 1.659 3.81801 1.99Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.5 9.25C15.2949 9.25 16.75 7.79493 16.75 6C16.75 4.20507 15.2949 2.75 13.5 2.75C11.7051 2.75 10.25 4.20507 10.25 6C10.25 7.79493 11.7051 9.25 13.5 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 10.75H5.75C5.19772 10.75 4.75 11.1977 4.75 11.75V15.25C4.75 15.8023 5.19772 16.25 5.75 16.25H9.25C9.80228 16.25 10.25 15.8023 10.25 15.25V11.75C10.25 11.1977 9.80228 10.75 9.25 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.81801 1.99L1.18901 6.49799C0.995008 6.83099 1.23501 7.24999 1.62101 7.24999H6.87901C7.26501 7.24999 7.50501 6.83099 7.31101 6.49799L4.68201 1.99C4.48901 1.659 4.01101 1.659 3.81801 1.99Z"
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

export default Shapes;
