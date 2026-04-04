import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CameraOff({
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
          d="M8 14.25H14.25C15.355 14.25 16.25 13.355 16.25 12.25V5.9922"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 3.75H12L11.493 2.399C11.347 2.009 10.974 1.75 10.557 1.75H7.443C7.026 1.75 6.653 2.009 6.507 2.399L6 3.75H3.75C2.645 3.75 1.75 4.645 1.75 5.75V12.25C1.75 13.355 2.645 14.25 3.75 14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.055 10.945C6.557 10.447 6.25 9.76 6.25 9C6.25 7.481 7.481 6.25 9 6.25C9.759 6.25 10.447 6.558 10.945 7.055"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 7C4.6642 7 5 6.6642 5 6.25C5 5.8358 4.6642 5.5 4.25 5.5C3.8358 5.5 3.5 5.8358 3.5 6.25C3.5 6.6642 3.8358 7 4.25 7Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CameraOff;
