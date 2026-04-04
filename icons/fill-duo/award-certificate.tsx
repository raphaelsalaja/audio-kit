import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AwardCertificate({
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
          d="M1.5 3.75C1.5 2.23079 2.73079 1 4.25 1H12.75C14.2692 1 15.5 2.23079 15.5 3.75V7.35543C15.1776 7.28636 14.8431 7.25 14.5 7.25C11.8762 7.25 9.75 9.37684 9.75 12C9.75 13.2386 10.2251 14.3668 11 15.2113V17H4.25C2.73079 17 1.5 15.7692 1.5 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.5 5.75C4.5 5.33579 4.83579 5 5.25 5H11.75C12.1642 5 12.5 5.33579 12.5 5.75C12.5 6.16421 12.1642 6.5 11.75 6.5H5.25C4.83579 6.5 4.5 6.16421 4.5 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.5 9C4.5 8.58579 4.83579 8.25 5.25 8.25H8.25C8.66421 8.25 9 8.58579 9 9C9 9.41421 8.66421 9.75 8.25 9.75H5.25C4.83579 9.75 4.5 9.41421 4.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.5 12.25C4.5 11.8358 4.83579 11.5 5.25 11.5H8.25C8.66421 11.5 9 11.8358 9 12.25C9 12.6642 8.66421 13 8.25 13H5.25C4.83579 13 4.5 12.6642 4.5 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 8.75C12.7047 8.75 11.25 10.2051 11.25 12C11.25 13.0407 11.7391 13.9672 12.5 14.562V17.5C12.5 17.702 12.622 17.885 12.809 17.962C12.996 18.041 13.21 17.997 13.354 17.854L14.5 16.708L15.646 17.854C15.742 17.95 15.87 18 16 18C16.064 18 16.13 17.988 16.191 17.962C16.378 17.885 16.5 17.702 16.5 17.5V14.562C17.2609 13.9672 17.75 13.0407 17.75 12C17.75 10.2051 16.2953 8.75 14.5 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AwardCertificate;
