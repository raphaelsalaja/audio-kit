import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableUser({
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
        <path d="M6.5 6.5V2H4.75C3.233 2 2 3.23 2 4.75V6.5H6.5Z" fill={fill} />
        <path
          d="M8.4375 14.5H6.5V6.5H2V13.25C2 14.77 3.233 16 4.75 16H8.4375C8.8516 16 9.1875 15.66 9.1875 15.25C9.1875 14.84 8.8516 14.5 8.4375 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16 5.75V4.75C16 3.2312 14.7688 2 13.25 2H6.5V6.5H15.25C15.6642 6.5 16 6.1642 16 5.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14 12C14.8284 12 15.5 11.3284 15.5 10.5C15.5 9.67157 14.8284 9 14 9C13.1716 9 12.5 9.67157 12.5 10.5C12.5 11.3284 13.1716 12 14 12Z"
          fill={fill}
        />
        <path
          d="M16.101 17H11.8989C11.4922 17 11.1084 16.8013 10.8716 16.4683C10.6392 16.1407 10.5786 15.7207 10.7095 15.3453C11.1978 13.943 12.52 13.0001 14 13.0001C15.48 13.0001 16.8022 13.943 17.291 15.3458C17.4214 15.7208 17.3608 16.1407 17.1284 16.4684C16.8916 16.8014 16.5077 17 16.101 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableUser;
