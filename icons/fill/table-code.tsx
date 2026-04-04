import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableCode({
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
          d="M15 16.5C14.808 16.5 14.616 16.4301 14.47 16.28C14.177 15.99 14.177 15.51 14.47 15.2199L16.19 13.4999L14.47 11.7799C14.177 11.4899 14.177 11.01 14.47 10.7199C14.763 10.43 15.238 10.43 15.531 10.7199L17.781 12.9699C18.074 13.2599 18.074 13.7398 17.781 14.0299L15.531 16.2799C15.385 16.4299 15.193 16.4999 15.001 16.4999L15 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M12 16.5C11.808 16.5 11.616 16.4301 11.47 16.28L9.21999 14.03C8.92699 13.74 8.92699 13.26 9.21999 12.9699L11.47 10.7199C11.763 10.43 12.238 10.43 12.531 10.7199C12.824 11.0099 12.824 11.4899 12.531 11.78L10.811 13.5L12.531 15.22C12.824 15.51 12.824 15.9901 12.531 16.2802C12.385 16.4302 12.193 16.5001 12.001 16.5001L12 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M6.5 8H3.5V6.5H6.5V3.5H8V6.5H15.25C15.6642 6.5 16 6.1642 16 5.75V4.75C16 3.2312 14.7688 2 13.25 2H4.75C3.2312 2 2 3.2312 2 4.75V13.25C2 14.7688 3.2312 16 4.75 16H5.75C6.1642 16 6.5 15.6642 6.5 15.25V8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableCode;
