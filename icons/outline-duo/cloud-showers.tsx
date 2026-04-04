import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudShowers({
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
          d="M9 3C11.362 3 13.278 4.827 13.464 7.141C15.065 7.568 16.25 9.014 16.25 10.75C16.25 12.2877 15.3244 13.6093 14 14.1879V13.25C14 12.0074 12.9926 11 11.75 11C11.5418 11 11.3403 11.0283 11.1489 11.0812C10.8641 10.1651 10.0097 9.5 9 9.5C7.99026 9.5 7.13587 10.1651 6.85107 11.0812C6.65974 11.0283 6.45817 11 6.25 11C5.00736 11 4 12.0074 4 13.25V14.4055C2.706 14.0725 1.75 12.898 1.75 11.5C1.75 9.887 3.027 8.58 4.624 8.513C4.549 8.186 4.5 7.85 4.5 7.5C4.5 5.015 6.515 3 9 3Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 11.75V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 13.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 13.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
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

export default CloudShowers;
