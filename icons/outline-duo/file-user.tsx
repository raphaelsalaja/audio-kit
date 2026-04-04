import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileUser({
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
          d="M10.3359 1.75C10.48 1.75 10.6212 1.78131 10.75 1.83984V5.25C10.75 5.802 11.198 6.25 11.75 6.25H15.1602C15.2188 6.37884 15.25 6.51984 15.25 6.66406L15.0859 8.55664C14.8965 8.51913 14.7005 8.5 14.5 8.5C12.8432 8.5 11.5 9.84317 11.5 11.5C11.5 12.1182 11.6873 12.6925 12.0078 13.1699C11.0498 13.7249 10.2305 14.5951 9.80957 15.666C9.73894 15.8577 9.67417 16.0483 9.63672 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.3359Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 6.75H7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.16 6.24998H11.75C11.198 6.24998 10.75 5.80198 10.75 5.24998V1.85199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.82542V6.66502C15.25 6.40002 15.145 6.14502 14.957 5.95802L11.043 2.04404C10.855 1.85604 10.601 1.75104 10.336 1.75104H4.75C3.645 1.75104 2.75 2.64704 2.75 3.75104V14.25C2.75 15.354 3.645 16.25 4.75 16.25H8.8921"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 13C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10C13.6716 10 13 10.6716 13 11.5C13 12.3284 13.6716 13 14.5 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.6011 18H12.399C11.9923 18 11.6085 17.8013 11.3717 17.4683C11.1393 17.1407 11.0787 16.7207 11.2096 16.3453C11.6979 14.943 13.0201 14.0001 14.5001 14.0001C15.9801 14.0001 17.3023 14.943 17.7911 16.3458C17.9215 16.7208 17.8609 17.1407 17.6285 17.4684C17.3917 17.8014 17.0078 18 16.6011 18Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FileUser;
