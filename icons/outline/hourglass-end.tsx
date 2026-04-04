import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HourglassEnd({
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
          d="M14.25 15.75H3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.25H3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.6016 13.2095C10.46 13.3926 10.2403 13.5 10.0088 13.5H7.99123C7.75983 13.5 7.54003 13.3926 7.39843 13.2095C7.25683 13.0264 7.20703 12.7876 7.26463 12.563C7.54003 11.4961 8.05853 11.1436 8.47463 10.8609C8.61733 10.7549 8.81073 10.6946 9.00003 10.6876C9.18933 10.6947 9.38273 10.755 9.52543 10.8609C9.94143 11.1436 10.46 11.4962 10.7354 12.563C10.793 12.7876 10.7432 13.0264 10.6016 13.2095Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M13.25 15.75C13.25 11.89 12.693 10.294 10.79 9C12.693 7.706 13.25 6.11 13.25 2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 2.25C4.75 6.11 5.307 7.706 7.21 9C5.307 10.294 4.75 11.89 4.75 15.75"
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

export default HourglassEnd;
