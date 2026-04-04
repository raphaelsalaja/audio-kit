import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConferenceRoom({
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
          d="M11.25 2.25H6.75C6.19772 2.25 5.75 2.69772 5.75 3.25V14.75C5.75 15.3023 6.19772 15.75 6.75 15.75H11.25C11.8023 15.75 12.25 15.3023 12.25 14.75V3.25C12.25 2.69772 11.8023 2.25 11.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 2.25H6.75C6.19772 2.25 5.75 2.69772 5.75 3.25V14.75C5.75 15.3023 6.19772 15.75 6.75 15.75H11.25C11.8023 15.75 12.25 15.3023 12.25 14.75V3.25C12.25 2.69772 11.8023 2.25 11.25 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 10.25C1.561 10.25 1 9.689 1 9C1 8.311 1.561 7.75 2.25 7.75C2.939 7.75 3.5 8.311 3.5 9C3.5 9.689 2.939 10.25 2.25 10.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.25 5.5C1.561 5.5 1 4.939 1 4.25C1 3.561 1.561 3 2.25 3C2.939 3 3.5 3.561 3.5 4.25C3.5 4.939 2.939 5.5 2.25 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.25 15C1.561 15 1 14.439 1 13.75C1 13.061 1.561 12.5 2.25 12.5C2.939 12.5 3.5 13.061 3.5 13.75C3.5 14.439 2.939 15 2.25 15Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 9C14.5 8.311 15.061 7.75 15.75 7.75C16.439 7.75 17 8.311 17 9C17 9.689 16.439 10.25 15.75 10.25C15.061 10.25 14.5 9.689 14.5 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 4.25C14.5 3.561 15.061 3 15.75 3C16.439 3 17 3.561 17 4.25C17 4.939 16.439 5.5 15.75 5.5C15.061 5.5 14.5 4.939 14.5 4.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 13.75C14.5 13.061 15.061 12.5 15.75 12.5C16.439 12.5 17 13.061 17 13.75C17 14.439 16.439 15 15.75 15C15.061 15 14.5 14.439 14.5 13.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ConferenceRoom;
