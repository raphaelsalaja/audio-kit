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
          d="M15 16.5C14.8081 16.5 14.6163 16.4301 14.4698 16.28C14.1768 15.99 14.1768 15.51 14.4698 15.2199L16.1893 13.4999L14.4698 11.7799C14.1768 11.4899 14.1768 11.01 14.4698 10.7199C14.7628 10.43 15.2373 10.43 15.5302 10.7199L17.7801 12.9699C18.0731 13.2599 18.0731 13.7398 17.7801 14.0299L15.5302 16.2799C15.3837 16.4299 15.1919 16.5 15 16.5Z"
          fill={fill}
        />
        <path
          d="M12 16.5C11.8081 16.5 11.6162 16.4301 11.4697 16.28L9.21975 14.03C8.92675 13.74 8.92675 13.26 9.21975 12.9699L11.4697 10.7199C11.7627 10.43 12.2373 10.43 12.5302 10.7199C12.8231 11.0099 12.8232 11.4899 12.5302 11.78L10.8105 13.5L12.5302 15.22C12.8232 15.51 12.8232 15.9901 12.5302 16.2802C12.3837 16.4302 12.1919 16.5 12 16.5Z"
          fill={fill}
        />
        <path d="M6.5 6.5V2H4.75C3.233 2 2 3.23 2 4.75V6.5H6.5Z" fill={fill} />
        <path
          d="M6.5 6.5H2V13.25C2 14.7688 3.2312 16 4.75 16H5.75C6.1642 16 6.5 15.6642 6.5 15.25V6.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16 5.75V4.75C16 3.2312 14.7688 2 13.25 2H6.5V6.5H15.25C15.6642 6.5 16 6.1642 16 5.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableCode;
