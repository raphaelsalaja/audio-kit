import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SearchChart({
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
          d="M11.1083 11.1083C11.4012 10.8154 11.876 10.8154 12.1689 11.1083L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L11.1083 12.1689C10.8154 11.876 10.8154 11.4012 11.1083 11.1083Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.6665 5.76923L9.96131 9.47385C9.53333 9.90182 8.84097 9.899 8.41462 9.47581L8.41264 9.47385L6.3129 7.37409L2.50885 11.1768C3.62562 12.877 5.54961 13.9993 7.7365 13.9993C11.1892 13.9993 13.9865 11.2019 13.9865 7.74927C13.9865 7.05718 13.8741 6.39141 13.6665 5.76923Z"
          fill={fill}
        />
        <path
          d="M7.73651 1.49927C4.28385 1.49927 1.48651 4.29661 1.48651 7.74927C1.48651 8.44934 1.60152 9.12247 1.81368 9.75081L5.54063 6.02521C5.96697 5.60202 6.65935 5.5992 7.08732 6.02718L9.18703 8.12689L12.9755 4.33904C11.8604 2.62915 9.93081 1.49927 7.73651 1.49927Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SearchChart;
