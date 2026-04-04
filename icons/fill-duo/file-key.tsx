import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileKey({
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
          d="M8.5 15.25C8.5 13.7312 9.73119 12.5 11.25 12.5C12.5088 12.5 13.57 13.3457 13.8965 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H16.5V16.75C16.5 17.1642 16.1642 17.5 15.75 17.5C15.3358 17.5 15 17.1642 15 16.75V16H13.8965C13.57 17.1543 12.5088 18 11.25 18C9.73119 18 8.5 16.7688 8.5 15.25ZM11.25 14C10.5596 14 10 14.5596 10 15.25C10 15.9404 10.5596 16.5 11.25 16.5C11.9404 16.5 12.5 15.9404 12.5 15.25C12.5 14.5596 11.9404 14 11.25 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.487 5.427L11.572 1.512C11.2442 1.1841 10.7996 1 10.336 1H4.75C3.2312 1 2 2.2312 2 3.75V14.25C2 15.7688 3.2312 17 4.75 17H7.37586C7.13441 16.4663 7 15.8739 7 15.25C7 12.9028 8.90276 11 11.25 11C12.7722 11 14.1053 11.7994 14.8558 13H16V6.6655C16 6.2009 15.8155 5.7553 15.487 5.427Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 6.75C5 6.33579 5.33579 6 5.75 6H7.75C8.16421 6 8.5 6.33579 8.5 6.75C8.5 7.16421 8.16421 7.5 7.75 7.5H5.75C5.33579 7.5 5 7.16421 5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 9.75C5 9.33579 5.33579 9 5.75 9H10.25C10.6642 9 11 9.33579 11 9.75C11 10.1642 10.6642 10.5 10.25 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.8691 6.00095H12C11.45 6.00095 11 5.55095 11 5.00095V1.13098C11.212 1.21803 11.4068 1.34674 11.572 1.51197L15.487 5.42697C15.6527 5.59263 15.7818 5.78817 15.8691 6.00095Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FileKey;
