import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileZip({
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
          d="M10.336 1.75C10.4801 1.75 10.6212 1.78103 10.75 1.83956V5.24999C10.75 5.80199 11.198 6.24999 11.75 6.24999H15.1603C15.2189 6.37883 15.25 6.51978 15.25 6.664V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.336ZM8.25 11C8.25 10.31 7.69 9.75 7 9.75C6.31 9.75 5.75 10.31 5.75 11V13.25H8.25V11Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.336C10.601 1.75 10.856 1.855 11.043 2.043L14.957 5.957C15.145 6.145 15.25 6.399 15.25 6.664V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.16 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.85199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path d="M7 2.5H5V4H7V2.5Z" fill={fill} stroke="none" />
        <path d="M9 4H7V5.5H9V4Z" fill={fill} stroke="none" />
        <path d="M7 5.5H5V7H7V5.5Z" fill={fill} stroke="none" />
        <path d="M9 7H7V8.5H9V7Z" fill={fill} stroke="none" />
        <path
          d="M7 9.75C7.69 9.75 8.25 10.31 8.25 11V13.25H5.75V11C5.75 10.31 6.31 9.75 7 9.75Z"
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

export default FileZip;
