import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudDroplet({
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
          d="M13.464 7.141C13.278 4.827 11.362 3 9 3C6.515 3 4.5 5.015 4.5 7.5C4.5 7.85 4.549 8.186 4.624 8.513C3.027 8.58 1.75 9.887 1.75 11.5C1.75 13.157 3.093 14.5 4.75 14.5L4.8779 14.1729C4.92088 12.8918 5.43416 11.9527 5.98592 11.2522C6.23169 10.9402 6.50004 10.6575 6.6968 10.4502L6.69826 10.4487L6.72737 10.4181C6.94933 10.1842 7.10397 10.019 7.24039 9.84776C7.6673 9.31205 8.315 9 9 9C9.685 9 10.3327 9.31205 10.7596 9.84776C10.896 10.019 11.0507 10.1842 11.2726 10.4181L11.3017 10.4487L11.3033 10.4504C11.5001 10.6577 11.7684 10.9403 12.0141 11.2522C12.5452 11.9266 13.0408 12.8221 13.1153 14.0309L13.5635 14.347C15.1166 13.8886 16.25 12.4516 16.25 10.75C16.25 9.014 15.065 7.568 13.464 7.141Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C10.036 16.25 10.875 15.398 10.875 14.347C10.875 12.902 9.824 12.284 9 11.25C8.176 12.284 7.125 12.902 7.125 14.347C7.125 15.398 7.964 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C10.036 16.25 10.875 15.398 10.875 14.347C10.875 12.902 9.824 12.284 9 11.25C8.176 12.284 7.125 12.902 7.125 14.347C7.125 15.398 7.964 16.25 9 16.25Z"
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
        <path
          d="M13.8499 13.9878C15.2514 13.4448 16.25 12.0935 16.25 10.5C16.25 8.762 15.065 7.3179 13.464 6.8911C13.278 4.5769 11.362 2.75 9 2.75C6.515 2.75 4.5 4.7651 4.5 7.25C4.5 7.6001 4.549 7.936 4.624 8.2629C3.027 8.33 1.75 9.6369 1.75 11.25C1.75 12.6951 2.7761 13.8896 4.1371 14.1746"
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

export default CloudDroplet;
