import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeadFrontVrHeadset({
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
          d="M2.75 7.558C2.75 6.52 3.537 5.651 4.571 5.563C5.943 5.446 7.424 5.375 9 5.375C10.353 5.375 11.828 5.428 13.407 5.561C14.445 5.649 15.25 6.517 15.25 7.559V9.25C15.25 10.355 14.355 11.25 13.25 11.25H11C10.685 11.25 10.389 11.102 10.2 10.85L9.8 10.317C9.4 9.784 8.6 9.784 8.2 10.317L7.8 10.85C7.611 11.102 7.315 11.25 7 11.25H4.75C3.645 11.25 2.75 10.355 2.75 9.25V7.558Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.094 5.745C13.523 3.488 11.457 1.75 9 1.75C6.546 1.75 4.481 3.485 3.908 5.739"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.142 11.155C4.199 11.677 4.238 12.031 4.238 12.031C4.53 14.439 6.499 16.25 8.999 16.25C11.499 16.25 13.469 14.439 13.76 12.031C13.76 12.031 13.8 11.677 13.856 11.156"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 7.558C2.75 6.52 3.537 5.651 4.571 5.563C5.943 5.446 7.424 5.375 9 5.375C10.353 5.375 11.828 5.428 13.407 5.561C14.445 5.649 15.25 6.517 15.25 7.559V9.25C15.25 10.355 14.355 11.25 13.25 11.25H11C10.685 11.25 10.389 11.102 10.2 10.85L9.8 10.317C9.4 9.784 8.6 9.784 8.2 10.317L7.8 10.85C7.611 11.102 7.315 11.25 7 11.25H4.75C3.645 11.25 2.75 10.355 2.75 9.25V7.558Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.375V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.375 13.159C10.346 13.142 9.66 12.75 9 12.75C8.34 12.75 7.654 13.142 7.625 13.159C7.548 13.203 7.5 13.286 7.5 13.375C7.5 13.464 7.548 13.547 7.625 13.591C7.654 13.608 8.34 14 9 14C9.66 14 10.346 13.608 10.375 13.591C10.452 13.547 10.5 13.464 10.5 13.375C10.5 13.286 10.452 13.203 10.375 13.159Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 9.5H1.75V7.25H2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 9.5H16.25V7.25H15.25"
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

export default HeadFrontVrHeadset;
