import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConnectedDots4({
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
          d="M9 5.25C10.1046 5.25 11 4.35457 11 3.25C11 2.14543 10.1046 1.25 9 1.25C7.89543 1.25 7 2.14543 7 3.25C7 4.35457 7.89543 5.25 9 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 11C4.35457 11 5.25 10.1046 5.25 9C5.25 7.89543 4.35457 7 3.25 7C2.14543 7 1.25 7.89543 1.25 9C1.25 10.1046 2.14543 11 3.25 11Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.75C10.1046 16.75 11 15.8546 11 14.75C11 13.6454 10.1046 12.75 9 12.75C7.89543 12.75 7 13.6454 7 14.75C7 15.8546 7.89543 16.75 9 16.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 11C15.8546 11 16.75 10.1046 16.75 9C16.75 7.89543 15.8546 7 14.75 7C13.6454 7 12.75 7.89543 12.75 9C12.75 10.1046 13.6454 11 14.75 11Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.664 7.586L7.586 4.664"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.414 4.664L13.336 7.586"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.336 10.414L10.414 13.336"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.586 13.336L4.664 10.414"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.25C10.1046 5.25 11 4.35457 11 3.25C11 2.14543 10.1046 1.25 9 1.25C7.89543 1.25 7 2.14543 7 3.25C7 4.35457 7.89543 5.25 9 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 11C4.35457 11 5.25 10.1046 5.25 9C5.25 7.89543 4.35457 7 3.25 7C2.14543 7 1.25 7.89543 1.25 9C1.25 10.1046 2.14543 11 3.25 11Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.75C10.1046 16.75 11 15.8546 11 14.75C11 13.6454 10.1046 12.75 9 12.75C7.89543 12.75 7 13.6454 7 14.75C7 15.8546 7.89543 16.75 9 16.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11C15.8546 11 16.75 10.1046 16.75 9C16.75 7.89543 15.8546 7 14.75 7C13.6454 7 12.75 7.89543 12.75 9C12.75 10.1046 13.6454 11 14.75 11Z"
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

export default ConnectedDots4;
