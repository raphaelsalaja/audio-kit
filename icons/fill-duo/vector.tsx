import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vector({
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
          d="M2.75 4.5C2.33579 4.5 2 4.83579 2 5.25C2 5.66421 2.33579 6 2.75 6H4.56441C3.29417 7.1859 2.5 8.87594 2.5 10.75C2.5 11.1642 2.83579 11.5 3.25 11.5C3.66421 11.5 4 11.1642 4 10.75C4 8.60331 5.35558 6.76784 7.26017 6.0634C7.58135 5.94461 7.77264 5.62916 7.74809 5.30389C7.74936 5.28609 7.75 5.26812 7.75 5.25C7.75 4.83579 7.41421 4.5 7 4.5H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 4.5C10.5858 4.5 10.25 4.83579 10.25 5.25C10.25 5.2681 10.2506 5.28604 10.2519 5.30382C10.2273 5.62911 10.4186 5.9446 10.7398 6.0634C12.6444 6.76784 14 8.60331 14 10.75C14 11.1642 14.3358 11.5 14.75 11.5C15.1642 11.5 15.5 11.1642 15.5 10.75C15.5 8.87594 14.7058 7.1859 13.4356 6H15.25C15.6642 6 16 5.66421 16 5.25C16 4.83579 15.6642 4.5 15.25 4.5H11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.5 6.75C2.328 6.75 3 6.08 3 5.25C3 4.42 2.328 3.75 1.5 3.75C0.672 3.75 0 4.42 0 5.25C0 6.08 0.672 6.75 1.5 6.75Z"
          fill={fill}
        />
        <path
          d="M16.5 6.75C17.328 6.75 18 6.08 18 5.25C18 4.42 17.328 3.75 16.5 3.75C15.672 3.75 15 4.42 15 5.25C15 6.08 15.672 6.75 16.5 6.75Z"
          fill={fill}
        />
        <path
          d="M6.75 4.25C6.75 3.55197 7.31351 3 8 3H10C10.6865 3 11.25 3.55197 11.25 4.25V6.25C11.25 6.94803 10.6865 7.5 10 7.5H8C7.31351 7.5 6.75 6.94803 6.75 6.25V4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.5 11.75C12.5 11.052 13.0635 10.5 13.75 10.5H15.75C16.4365 10.5 17 11.052 17 11.75V13.75C17 14.448 16.4365 15 15.75 15H13.75C13.0635 15 12.5 14.448 12.5 13.75V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 11.75C1 11.052 1.56351 10.5 2.25 10.5H4.25C4.93649 10.5 5.5 11.052 5.5 11.75V13.75C5.5 14.448 4.93649 15 4.25 15H2.25C1.56351 15 1 14.448 1 13.75V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Vector;
