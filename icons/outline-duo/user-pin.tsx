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
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 17C14.25 17 11.5 15.491 11.5 13.25C11.5 11.731 12.731 10.5 14.25 10.5C15.769 10.5 17 11.731 17 13.25C17 15.491 14.25 17 14.25 17Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 14C14.6642 14 15 13.6642 15 13.25C15 12.8358 14.6642 12.5 14.25 12.5C13.8358 12.5 13.5 12.8358 13.5 13.25C13.5 13.6642 13.8358 14 14.25 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 17C14.25 17 11.5 15.491 11.5 13.25C11.5 11.731 12.731 10.5 14.25 10.5C15.769 10.5 17 11.731 17 13.25C17 15.491 14.25 17 14.25 17Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.66501 9.79489C9.44691 9.76779 9.2259 9.75049 9 9.75049C6.449 9.75049 4.26098 11.2805 3.29098 13.4705C2.92598 14.2955 3.378 15.2444 4.238 15.5154C5.463 15.9014 7.084 16.2495 9 16.2495C9.1093 16.2495 9.2097 16.2402 9.3147 16.2358"
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
