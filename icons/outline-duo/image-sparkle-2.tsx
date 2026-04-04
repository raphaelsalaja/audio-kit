import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageSparkle2({
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
          d="M9.83977 8.91558L3.76648 14.979L4.44716 15.2586L13.2609 15.2487C14.3671 15.2474 15.2622 14.3484 15.2586 13.2422L15.253 11.5027L12.6671 8.91673C11.8865 8.13613 10.621 8.13561 9.83977 8.91558Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.76199 14.989L9.83599 8.914C10.617 8.133 11.883 8.133 12.664 8.914L15.25 11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.74301 6.492L6.79701 6.177L6.48101 5.23C6.37901 4.924 5.87201 4.924 5.77001 5.23L5.45401 6.177L4.50801 6.492C4.35501 6.543 4.25101 6.686 4.25101 6.848C4.25101 7.01 4.35501 7.153 4.50801 7.204L5.45401 7.519L5.77001 8.466C5.82101 8.619 5.96401 8.722 6.12501 8.722C6.28601 8.722 6.43001 8.618 6.48001 8.466L6.79601 7.519L7.74201 7.204C7.89501 7.153 7.99901 7.01 7.99901 6.848C7.99901 6.686 7.89601 6.543 7.74301 6.492Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.658 1.99L12.395 1.569L11.974 0.306C11.837 -0.102 11.162 -0.102 11.025 0.306L10.604 1.569L9.34099 1.99C9.13699 2.058 8.99899 2.249 8.99899 2.464C8.99899 2.679 9.13699 2.87 9.34099 2.938L10.604 3.359L11.025 4.622C11.093 4.826 11.285 4.964 11.5 4.964C11.715 4.964 11.906 4.826 11.975 4.622L12.396 3.359L13.659 2.938C13.863 2.87 14.001 2.679 14.001 2.464C14.001 2.249 13.863 2.058 13.659 1.99H13.658Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.75 13C12.1642 13 12.5 12.6642 12.5 12.25C12.5 11.8358 12.1642 11.5 11.75 11.5C11.3358 11.5 11 11.8358 11 12.25C11 12.6642 11.3358 13 11.75 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 4.5865V13.25C15.25 14.355 14.355 15.25 13.25 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V4.75C2.75 3.645 3.645 2.75 4.75 2.75H6.7645"
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

export default ImageSparkle2;
