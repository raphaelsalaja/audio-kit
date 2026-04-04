import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KnifeFork({
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
          d="M5.75 2.25C5.267 2.968 4.75101 3.871 4.31201 4.958C3.49501 6.987 3.284 8.824 3.25 10.105L5.75 12.25V2.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.75 15.75V2.25C5.267 2.968 4.75101 3.871 4.31201 4.958C3.49501 6.987 3.284 8.824 3.25 10.105L5.75 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 2.25V5.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.25L14.394 6.002C14.452 7.502 13.251 8.75 11.75 8.75C10.249 8.75 9.04802 7.502 9.10602 6.002L9.25003 2.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 8.75V15.75"
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

export default KnifeFork;
