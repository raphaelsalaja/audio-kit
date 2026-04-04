import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Joystick({
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
          d="M14.25 13.25V10.6283L9.04693 13.25L3.74799 10.6283V13.25C3.74799 13.554 3.90699 13.857 4.22299 14.013L8.56099 16.148C8.83699 16.284 9.16099 16.284 9.43699 16.148L13.775 14.013C14.092 13.857 14.25 13.553 14.25 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 6.25C10.243 6.25 11.25 5.2426 11.25 4C11.25 2.7574 10.243 1.75 9 1.75C7.757 1.75 6.75 2.7574 6.75 4C6.75 5.2426 7.757 6.25 9 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 6.25C10.243 6.25 11.25 5.2426 11.25 4C11.25 2.7574 10.243 1.75 9 1.75C7.757 1.75 6.75 2.7574 6.75 4C6.75 5.2426 7.757 6.25 9 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.25V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.998 8.6122L13.775 9.487C14.408 9.798 14.408 10.701 13.775 11.012L9.43701 13.147C9.29901 13.215 9.14901 13.249 8.99901 13.249C8.84901 13.249 8.69901 13.215 8.56101 13.147L4.22301 11.012C3.59001 10.701 3.59001 9.798 4.22301 9.487L6.00001 8.6122"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 10.25V13.25C14.25 13.553 14.092 13.857 13.775 14.013L9.43699 16.148C9.16099 16.284 8.83699 16.284 8.56099 16.148L4.22299 14.013C3.90699 13.857 3.74799 13.554 3.74799 13.25V10.25"
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

export default Joystick;
