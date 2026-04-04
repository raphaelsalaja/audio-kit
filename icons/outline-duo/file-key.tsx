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
          d="M10.3359 1.75C10.48 1.75 10.6212 1.78131 10.75 1.83984V5.25C10.75 5.802 11.198 6.25 11.75 6.25H15.1602C15.2188 6.37884 15.25 6.51984 15.25 6.66406V12.0375C15.25 12.3864 14.8867 12.8771 14.6666 12.6063C13.8715 11.6276 12.5978 11 11.25 11C8.90276 11 7 12.9028 7 15.25C7 15.5401 7.02962 15.8233 7.08518 16.097C7.1056 16.1976 6.96901 16.25 6.86633 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.3359Z"
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
          d="M15.16 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.85199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 12.153V6.664C15.25 6.399 15.145 6.144 14.957 5.957L11.043 2.043C10.855 1.855 10.601 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H6.3506"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 17.25C12.3546 17.25 13.25 16.3546 13.25 15.25C13.25 14.1454 12.3546 13.25 11.25 13.25C10.1454 13.25 9.25 14.1454 9.25 15.25C9.25 16.3546 10.1454 17.25 11.25 17.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 15.25H17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 15.25V16.75"
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

export default FileKey;
