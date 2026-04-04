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
          d="M15.16 6.25H11.75C11.198 6.25 10.75 5.802 10.75 5.25V1.85201"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.82539V6.66499C15.25 6.39999 15.145 6.14499 14.957 5.95799L11.043 2.04401C10.855 1.85601 10.601 1.75101 10.336 1.75101H4.75C3.645 1.75101 2.75 2.64701 2.75 3.75101V14.25C2.75 15.354 3.645 16.25 4.75 16.25H8.8921"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 13C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10C13.6716 10 13 10.6716 13 11.5C13 12.3284 13.6716 13 14.5 13Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M16.6011 18H12.399C11.9923 18 11.6085 17.8013 11.3717 17.4683C11.1393 17.1407 11.0787 16.7207 11.2096 16.3453C11.6979 14.943 13.0201 14.0001 14.5001 14.0001C15.9801 14.0001 17.3023 14.943 17.7911 16.3458C17.9215 16.7208 17.8609 17.1407 17.6285 17.4684C17.3917 17.8014 17.0078 18 16.6011 18Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FileUser;
