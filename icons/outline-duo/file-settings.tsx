import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileSettings({
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
          d="M10.75 1.83984C10.6212 1.78131 10.48 1.75 10.3359 1.75H4.75C3.645 1.75 2.75 2.645 2.75 3.75V14.25C2.75 15.355 3.645 16.25 4.75 16.25H9.00648V15.7374C8.54457 15.2567 8.25 14.4166 8.25 13.75C8.25 12.9716 8.64538 12.2858 9.24609 11.8818C9.10844 11.1722 9.31218 10.4105 9.86133 9.86133L10.0215 9.71582C10.5532 9.27657 11.2388 9.12137 11.8818 9.24609C12.2858 8.64538 12.9716 8.25 13.75 8.25C14.1596 8.25 14.5433 8.35964 14.8739 8.55104C14.9286 8.58273 15.0008 8.53912 15.0674 8.4761C15.2055 8.34532 15.25 8.14897 15.25 7.95877V6.66406C15.25 6.51984 15.2188 6.37884 15.1602 6.25H11.75C11.198 6.25 10.75 5.802 10.75 5.25V1.83984Z"
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
          d="M5.75 9.75H8.9827"
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
          d="M15.25 7.9079V6.664C15.25 6.399 15.145 6.144 14.957 5.957L11.043 2.043C10.855 1.855 10.601 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H8.46729"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 10.5V11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.0481 11.4519L15.341 12.159"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17 13.75H16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.0481 16.0481L15.341 15.341"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 17V16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.4519 16.0481L12.159 15.341"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 13.75H11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.4519 11.4519L12.159 12.159"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 15.75C14.8546 15.75 15.75 14.8546 15.75 13.75C15.75 12.6454 14.8546 11.75 13.75 11.75C12.6454 11.75 11.75 12.6454 11.75 13.75C11.75 14.8546 12.6454 15.75 13.75 15.75Z"
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

export default FileSettings;
