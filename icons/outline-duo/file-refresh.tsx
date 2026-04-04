import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileRefresh({
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
          d="M10.75 1.83956C10.6212 1.78103 10.4801 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.645 2.75 3.75V14.25C2.75 15.355 3.645 16.25 4.75 16.25H9.32216C9.49789 16.25 9.79177 16.1964 9.73809 16.0291C9.58348 15.5471 9.5 15.0333 9.5 14.5C9.5 11.7384 11.7384 9.5 14.5 9.5C14.755 9.5 15.0055 9.51908 15.25 9.55586V6.664C15.25 6.51978 15.2189 6.37883 15.1603 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.83956Z"
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
          d="M14.75 13.75H17.25V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 16.387C15.999 16.918 15.288 17.25 14.5 17.25C12.981 17.25 11.75 16.019 11.75 14.5C11.75 12.981 12.981 11.75 14.5 11.75C15.666 11.75 16.662 12.476 17.063 13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.8186V6.66409C15.25 6.39899 15.145 6.14411 14.957 5.95711L11.043 2.043C10.855 1.855 10.601 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H9.0244"
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

export default FileRefresh;
