import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudHailMixed({
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
          d="M9 3C11.362 3 13.278 4.827 13.464 7.141C15.065 7.568 16.25 9.014 16.25 10.75C16.25 12.2877 15.3244 13.6093 14 14.1879V12.25C14 11.0074 12.9926 10 11.75 10C11.5418 10 11.3403 10.0283 11.1489 10.0812C10.8641 9.16514 10.0097 8.5 9 8.5C7.99026 8.5 7.13587 9.16514 6.85107 10.0812C6.65974 10.0283 6.45817 10 6.25 10C5.00736 10 4 11.0074 4 12.25V14.4055C2.706 14.0725 1.75 12.898 1.75 11.5C1.75 9.887 3.027 8.58 4.624 8.513C4.549 8.186 4.5 7.85 4.5 7.5C4.5 5.015 6.515 3 9 3ZM8.5 14.4442V14.5H9H9.5V14.4442C9.33919 14.4807 9.17185 14.5 9 14.5C8.82815 14.5 8.66081 14.4807 8.5 14.4442Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.75 12.25V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 17C12.1642 17 12.5 16.6642 12.5 16.25C12.5 15.8358 12.1642 15.5 11.75 15.5C11.3358 15.5 11 15.8358 11 16.25C11 16.6642 11.3358 17 11.75 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 12.25V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 17C6.66421 17 7 16.6642 7 16.25C7 15.8358 6.66421 15.5 6.25 15.5C5.83579 15.5 5.5 15.8358 5.5 16.25C5.5 16.6642 5.83579 17 6.25 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 10.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.5C9.41421 15.5 9.75 15.1642 9.75 14.75C9.75 14.3358 9.41421 14 9 14C8.58579 14 8.25 14.3358 8.25 14.75C8.25 15.1642 8.58579 15.5 9 15.5Z"
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
          d="M9.70499 8C10.392 7.233 11.389 6.75 12.5 6.75C12.833 6.75 13.157 6.809 13.464 6.891"
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

export default CloudHailMixed;
