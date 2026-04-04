import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shopping({
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
          d="M4.06901 4C2.65129 4 1.46616 5.07798 1.33141 6.48869L0.712391 12.9889C0.558452 14.6033 1.82876 16 3.45 16H9.05002C10.5001 16 11.6695 14.8825 11.79 13.4913C10.508 13.3846 9.5 12.3095 9.5 11V10.75C9.5 10.3358 9.83579 10 10.25 10C10.6642 10 11 10.3358 11 10.75V11C11 11.4431 11.2891 11.8195 11.6887 11.9505L11.1686 6.48869C11.0339 5.07798 9.84874 4 8.43101 4H4.06901Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.82101 7.5C8.4024 7.5 7.21546 8.57912 7.08329 9.99299L6.70829 13.993C6.55707 15.6057 7.82593 17 9.44601 17H14.553C16.1731 17 17.442 15.6057 17.2907 13.993L16.9157 9.99299C16.7836 8.58043 15.5969 7.5 14.178 7.5H9.82101ZM11 10.75C11 10.3358 10.6642 10 10.25 10C9.83579 10 9.5 10.3358 9.5 10.75V11C9.5 12.3802 10.6198 13.5 12 13.5C13.3802 13.5 14.5 12.3802 14.5 11V10.75C14.5 10.3358 14.1642 10 13.75 10C13.3358 10 13 10.3358 13 10.75V11C13 11.5518 12.5518 12 12 12C11.4482 12 11 11.5518 11 11V10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 2.75C5 2.05921 5.55921 1.5 6.25 1.5C6.94079 1.5 7.5 2.05921 7.5 2.75V4H8.43101C8.62577 4 8.81614 4.02034 9 4.0591V2.75C9 1.23079 7.76921 0 6.25 0C4.73079 0 3.5 1.23079 3.5 2.75V4.0591C3.68387 4.02035 3.87425 4 4.06901 4H5V2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Shopping;
