import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Voicemail({
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
          d="M4 12.25C5.79493 12.25 7.25 10.7949 7.25 9C7.25 7.20507 5.79493 5.75 4 5.75C2.20507 5.75 0.75 7.20507 0.75 9C0.75 10.7949 2.20507 12.25 4 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 12.25C15.7949 12.25 17.25 10.7949 17.25 9C17.25 7.20507 15.7949 5.75 14 5.75C12.2051 5.75 10.75 7.20507 10.75 9C10.75 10.7949 12.2051 12.25 14 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4 12.25C5.79493 12.25 7.25 10.7949 7.25 9C7.25 7.20507 5.79493 5.75 4 5.75C2.20507 5.75 0.75 7.20507 0.75 9C0.75 10.7949 2.20507 12.25 4 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 12.25C15.7949 12.25 17.25 10.7949 17.25 9C17.25 7.20507 15.7949 5.75 14 5.75C12.2051 5.75 10.75 7.20507 10.75 9C10.75 10.7949 12.2051 12.25 14 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 12.25H14.25"
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

export default Voicemail;
