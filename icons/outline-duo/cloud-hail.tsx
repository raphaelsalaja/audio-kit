import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudHail({
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
          d="M9 3C11.362 3 13.278 4.827 13.464 7.141C15.065 7.568 16.25 9.014 16.25 10.75C16.25 12.0167 15.6219 13.1368 14.6601 13.8157V13.6518H13.9642C13.9877 13.5214 14 13.3872 14 13.25C14 12.0074 12.9926 11 11.75 11C11.5418 11 11.3403 11.0283 11.1489 11.0812C10.8641 10.1651 10.0097 9.5 9 9.5C7.99026 9.5 7.13587 10.1651 6.85107 11.0812C6.65974 11.0283 6.45817 11 6.25 11C5.00736 11 4 12.0074 4 13.25C4 13.3993 4.01454 13.5452 4.04228 13.6864H3.55818V14.254C2.49422 13.793 1.75 12.7335 1.75 11.5C1.75 9.887 3.027 8.58 4.624 8.513C4.549 8.186 4.5 7.85 4.5 7.5C4.5 5.015 6.515 3 9 3Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.75 17C12.1642 17 12.5 16.6642 12.5 16.25C12.5 15.8358 12.1642 15.5 11.75 15.5C11.3358 15.5 11 15.8358 11 16.25C11 16.6642 11.3358 17 11.75 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 17C6.66421 17 7 16.6642 7 16.25C7 15.8358 6.66421 15.5 6.25 15.5C5.83579 15.5 5.5 15.8358 5.5 16.25C5.5 16.6642 5.83579 17 6.25 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 15.5C9.41421 15.5 9.75 15.1642 9.75 14.75C9.75 14.3358 9.41421 14 9 14C8.58579 14 8.25 14.3358 8.25 14.75C8.25 15.1642 8.58579 15.5 9 15.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.75 14C12.1642 14 12.5 13.6642 12.5 13.25C12.5 12.8358 12.1642 12.5 11.75 12.5C11.3358 12.5 11 12.8358 11 13.25C11 13.6642 11.3358 14 11.75 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 14C6.66421 14 7 13.6642 7 13.25C7 12.8358 6.66421 12.5 6.25 12.5C5.83579 12.5 5.5 12.8358 5.5 13.25C5.5 13.6642 5.83579 14 6.25 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 12.5C9.41421 12.5 9.75 12.1642 9.75 11.75C9.75 11.3358 9.41421 11 9 11C8.58579 11 8.25 11.3358 8.25 11.75C8.25 12.1642 8.58579 12.5 9 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.477 13.687C15.541 13.025 16.25 11.845 16.25 10.5C16.25 8.764 15.065 7.318 13.464 6.891C13.278 4.577 11.362 2.75 9 2.75C6.515 2.75 4.5 4.765 4.5 7.25C4.5 7.6 4.549 7.936 4.624 8.263C3.027 8.33 1.75 9.637 1.75 11.25C1.75 12.458 2.464 13.499 3.493 13.975"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.705 8C10.392 7.233 11.389 6.75 12.5 6.75C12.833 6.75 13.157 6.809 13.464 6.891"
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

export default CloudHail;
