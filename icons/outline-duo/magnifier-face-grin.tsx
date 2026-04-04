import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierFaceGrin({
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
          d="M7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.75C13.25 4.7125 10.7875 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 15.75L11.6386 11.6386"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.75C13.25 4.7125 10.7875 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 8C6.052 8 6.5 7.5523 6.5 7C6.5 6.4477 6.052 6 5.5 6C4.948 6 4.5 6.4477 4.5 7C4.5 7.5523 4.948 8 5.5 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10 8C10.552 8 11 7.5523 11 7C11 6.4477 10.552 6 10 6C9.448 6 9 6.4477 9 7C9 7.5523 9.448 8 10 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.58334 8.5H8.91663C9.23863 8.5 9.49994 8.7613 9.49994 9.0833C9.49994 10.0493 8.71594 10.8333 7.74994 10.8333C6.78394 10.8333 5.99994 10.0493 5.99994 9.0833C5.99994 8.7613 6.26134 8.5 6.58334 8.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MagnifierFaceGrin;
