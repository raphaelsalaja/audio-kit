import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FocusMode({
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
          d="M9 12.25C10.7949 12.25 12.25 10.7949 12.25 9C12.25 7.20507 10.7949 5.75 9 5.75C7.20507 5.75 5.75 7.20507 5.75 9C5.75 10.7949 7.20507 12.25 9 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6 15.602C3.493 14.461 1.75 11.934 1.75 9C1.75 6.066 3.493 3.539 6 2.39799"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 15.602C14.507 14.461 16.25 11.934 16.25 9C16.25 6.066 14.507 3.539 12 2.39799"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.25C10.7949 12.25 12.25 10.7949 12.25 9C12.25 7.20507 10.7949 5.75 9 5.75C7.20507 5.75 5.75 7.20507 5.75 9C5.75 10.7949 7.20507 12.25 9 12.25Z"
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

export default FocusMode;
