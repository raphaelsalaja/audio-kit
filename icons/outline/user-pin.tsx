import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserPin({
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
          d="M9 7.2505C10.519 7.2505 11.75 6.0195 11.75 4.5005C11.75 2.9815 10.519 1.7505 9 1.7505C7.481 1.7505 6.25 2.9815 6.25 4.5005C6.25 6.0195 7.481 7.2505 9 7.2505Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 14.0005C14.664 14.0005 15 13.6645 15 13.2505C15 12.8365 14.664 12.5005 14.25 12.5005C13.836 12.5005 13.5 12.8365 13.5 13.2505C13.5 13.6645 13.836 14.0005 14.25 14.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M14.25 17.0005C14.25 17.0005 11.5 15.4915 11.5 13.2505C11.5 11.7315 12.731 10.5005 14.25 10.5005C15.769 10.5005 17 11.7315 17 13.2505C17 15.4915 14.25 17.0005 14.25 17.0005Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.66501 9.7949C9.44691 9.7678 9.2259 9.7505 9 9.7505C6.449 9.7505 4.26098 11.2805 3.29098 13.4705C2.92598 14.2955 3.378 15.2444 4.238 15.5154C5.463 15.9014 7.084 16.2495 9 16.2495C9.1093 16.2495 9.2097 16.2402 9.3147 16.2358"
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

export default UserPin;
