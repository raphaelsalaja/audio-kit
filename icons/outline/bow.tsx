import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bow({
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
          d="M10.75 7H13"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 7H5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.78703 9.24999C8.87003 11.112 8.01603 13.431 7.23303 16.25L6.28603 13.963L3.99902 14.91C4.54802 12.861 5.33604 10.803 6.29204 8.73999"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.766 16.25L11.713 13.963L14 14.91C13.451 12.861 12.663 10.803 11.707 8.73999"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 4.75H8.25C7.698 4.75 7.25 5.1977 7.25 5.75V8.25C7.25 8.8023 7.698 9.25 8.25 9.25H9.75C10.302 9.25 10.75 8.8023 10.75 8.25V5.75C10.75 5.1977 10.302 4.75 9.75 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25002 6C6.11102 4.718 4.82001 3.658 3.11401 3.202C2.53201 3.046 1.93202 3.467 1.87602 4.067C1.69502 6.02 1.78402 7.789 2.07802 9.416C2.17002 9.926 2.65901 10.295 3.17001 10.213C4.49501 10.002 5.86301 9.139 7.24901 7.999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 6C11.889 4.718 13.18 3.658 14.886 3.202C15.468 3.046 16.068 3.467 16.124 4.067C16.305 6.02 16.216 7.789 15.922 9.416C15.83 9.926 15.341 10.295 14.83 10.213C13.505 10.002 12.137 9.139 10.751 7.999"
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

export default Bow;
