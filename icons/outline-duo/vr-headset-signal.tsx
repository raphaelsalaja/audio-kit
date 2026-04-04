import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrHeadsetSignal({
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
          d="M9.00001 8.25C11.004 8.25 13.499 8.322 14.735 9.298C15.971 10.273 16.433 11.28 16.185 13.084C15.938 14.888 14.817 15.863 13.521 16.155C12.224 16.448 11.171 16.022 10.629 15.449C10.044 14.832 9.73501 14.306 9.00001 14.306C8.26501 14.306 7.95601 14.832 7.37101 15.449C6.82901 16.022 5.77501 16.448 4.47901 16.155C3.18301 15.863 2.06201 14.888 1.81501 13.084C1.56801 11.28 2.02901 10.273 3.26501 9.298C4.50101 8.323 6.99701 8.25 9.00001 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75699 3.507C7.09999 1.164 10.899 1.164 13.242 3.507"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.879 5.629C8.051 4.457 9.95 4.457 11.122 5.629"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.00001 8.25C11.004 8.25 13.499 8.322 14.735 9.298C15.971 10.273 16.433 11.28 16.185 13.084C15.938 14.888 14.817 15.863 13.521 16.155C12.224 16.448 11.171 16.022 10.629 15.449C10.044 14.832 9.73501 14.306 9.00001 14.306C8.26501 14.306 7.95601 14.832 7.37101 15.449C6.82901 16.022 5.77501 16.448 4.47901 16.155C3.18301 15.863 2.06201 14.888 1.81501 13.084C1.56801 11.28 2.02901 10.273 3.26501 9.298C4.50101 8.323 6.99701 8.25 9.00001 8.25Z"
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

export default VrHeadsetSignal;
