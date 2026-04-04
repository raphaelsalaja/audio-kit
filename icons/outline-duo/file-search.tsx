import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileSearch({
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
          d="M10.75 1.83956C10.6212 1.78103 10.4801 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.645 2.75 3.75V14.25C2.75 15.355 3.645 16.25 4.75 16.25H9.46591C9.68798 16.25 10.0312 16.1345 9.93566 15.9341C9.65635 15.3481 9.5 14.6923 9.5 14C9.5 11.5147 11.5147 9.5 14 9.5C14.3578 9.5 14.7059 9.54176 15.0396 9.62068C15.1947 9.65736 15.25 9.41024 15.25 9.25085V6.664C15.25 6.51978 15.2189 6.37883 15.1603 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.83956Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
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
          d="M15.16 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.85199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 16.25C15.2426 16.25 16.25 15.2426 16.25 14C16.25 12.7574 15.2426 11.75 14 11.75C12.7574 11.75 11.75 12.7574 11.75 14C11.75 15.2426 12.7574 16.25 14 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.59 15.59L17.25 17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.91701V6.66409C15.25 6.39899 15.145 6.14411 14.957 5.95711L11.043 2.043C10.855 1.855 10.601 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H9.2766"
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

export default FileSearch;
