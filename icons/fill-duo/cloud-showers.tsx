import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudShowers({
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
          d="M14.157 6.326C12.633 5.724 10.7083 6 9.12499 7.3958C9.37499 6.125 11.4118 4.5058 13.523 4.608C12.61 3.047 10.922 2 9.02899 2C6.14399 2 3.79799 4.355 3.79799 7.25C3.79799 7.375 3.80299 7.5 3.81399 7.627C2.16899 8.045 0.96499 9.561 1.00199 11.334C1.02299 12.334 1.43099 13.265 2.14999 13.958C2.84999 14.632 3.76299 15 4.71499 15H12.516C14.989 15 17 12.982 17 10.499C16.997 8.64 15.869 7.003 14.157 6.326Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 11C9.41421 11 9.75 11.3358 9.75 11.75V14.75C9.75 15.1642 9.41421 15.5 9 15.5C8.58579 15.5 8.25 15.1642 8.25 14.75V11.75C8.25 11.3358 8.58579 11 9 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 12.5C6.66421 12.5 7 12.8358 7 13.25V16.25C7 16.6642 6.66421 17 6.25 17C5.83579 17 5.5 16.6642 5.5 16.25V13.25C5.5 12.8358 5.83579 12.5 6.25 12.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.75 12.5C12.1642 12.5 12.5 12.8358 12.5 13.25V16.25C12.5 16.6642 12.1642 17 11.75 17C11.3358 17 11 16.6642 11 16.25V13.25C11 12.8358 11.3358 12.5 11.75 12.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CloudShowers;
