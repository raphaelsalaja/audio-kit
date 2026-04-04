import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connection({
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
          d="M6.04303 7.75H11.957C12.509 7.75 12.957 8.198 12.957 8.75V9.146C12.957 11.331 11.185 13.103 9.00003 13.103C6.81503 13.103 5.04303 11.331 5.04303 9.146V8.75C5.04303 8.198 5.49103 7.75 6.04303 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13 15.047C14.958 13.749 16.25 11.525 16.25 9C16.25 4.996 13.004 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25V13.104"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.04303 7.75H11.957C12.509 7.75 12.957 8.198 12.957 8.75V9.146C12.957 11.331 11.185 13.103 9.00003 13.103C6.81503 13.103 5.04303 11.331 5.04303 9.146V8.75C5.04303 8.198 5.49103 7.75 6.04303 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.23199 7.75V5.55"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.768 7.75V5.55"
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

export default Connection;
