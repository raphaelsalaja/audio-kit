import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MedicalMask({
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
          d="M13.75 9V5.5C12 4.667 10.75 4.25 9 4.25C7.25 4.25 6 4.667 4.25 5.5V12.5C6 13.333 7.25 13.75 9 13.75C10.75 13.75 12 13.333 13.75 12.5V9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 12.5H3.25C2.145 12.5 1.25 11.605 1.25 10.5V7.5C1.25 6.395 2.145 5.5 3.25 5.5H4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 12.5H14.75C15.855 12.5 16.75 11.605 16.75 10.5V7.5C16.75 6.395 15.855 5.5 14.75 5.5H13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 9V5.5C12 4.667 10.75 4.25 9 4.25C7.25 4.25 6 4.667 4.25 5.5V12.5C6 13.333 7.25 13.75 9 13.75C10.75 13.75 12 13.333 13.75 12.5V9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 10.5C9.75 10.833 8.25 10.833 6.75 10.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 7.49999C9.75 7.16699 8.25 7.16699 6.75 7.49999"
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

export default MedicalMask;
