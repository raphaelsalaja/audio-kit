import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandBookOpen({
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
          d="M15.75 3.3545V10.7489L13.6391 10.4477C13.4526 10.421 13.2633 10.4209 13.0767 10.4473L10.9421 10.7489L9.60117 8.00105C9.43589 7.66235 9.12871 7.41455 8.76271 7.32466L8.64762 7.29639C8.17053 7.17921 7.67313 7.38927 7.42445 7.81294C7.24257 8.12282 7.22177 8.50153 7.36864 8.82946L8.9993 12.4705C8.9688 12.482 6.47762 10.771 3.5015 12.1847C2.8981 12.4222 2.25 11.9639 2.25 11.316V3.3516C2.25 3.022 2.4185 2.7222 2.7025 2.5545C3.2957 2.2044 4.3097 1.751 5.6264 1.751C7.3844 1.751 8.6014 2.561 8.9993 2.8506C9.3962 2.5618 10.614 1.75 12.3736 1.75C13.6902 1.75 14.7043 2.2036 15.2974 2.5537C15.5815 2.7212 15.75 3.0247 15.75 3.3545Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M17.25 15.225C17.25 13.166 17.014 11.586 16.25 11.002C15.375 10.333 13.098 10.164 10.955 10.77L9.62499 7.94301C9.33199 7.31701 8.58799 7.04701 7.96199 7.34001C7.33699 7.63201 7.06599 8.37601 7.35799 9.00101L9.91899 14.457L7.19499 13.956C6.60799 13.848 6.02799 14.18 5.82399 14.741C5.59199 15.378 5.92198 16.081 6.55998 16.31L9.17598 17.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 15.225C17.25 13.166 17.014 11.586 16.25 11.002C15.375 10.333 13.098 10.164 10.955 10.77L9.62499 7.94301C9.33199 7.31701 8.58799 7.04701 7.96199 7.34001C7.33699 7.63201 7.06599 8.37601 7.35799 9.00101L9.91899 14.457L7.19499 13.956C6.60799 13.848 6.02799 14.18 5.82399 14.741C5.59199 15.378 5.92198 16.081 6.55998 16.31L9.17598 17.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.99908 2.85059V4.50499"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 7.6167V3.3545C15.75 3.0247 15.5815 2.7212 15.2974 2.5537C14.7043 2.2036 13.6902 1.75 12.3736 1.75C10.614 1.75 9.3962 2.5618 8.9993 2.8506C8.6014 2.561 7.3844 1.751 5.6264 1.751C4.3097 1.751 3.2957 2.2044 2.7025 2.5545C2.4185 2.7222 2.25 3.022 2.25 3.3516V11.316C2.25 11.9639 2.8981 12.4222 3.5015 12.1847C3.5312 12.173 3.56591 12.1632 3.59641 12.1517"
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

export default HandBookOpen;
