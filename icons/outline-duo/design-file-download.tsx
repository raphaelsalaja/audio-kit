import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFileDownload({
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
          d="M14.75 10V8.75V6.664C14.75 6.399 14.645 6.145 14.457 5.957L10.543 2.043C10.356 1.855 10.101 1.75 9.836 1.75H4.25C3.145 1.75 2.25 2.645 2.25 3.75V14.25C2.25 15.355 3.145 16.25 4.25 16.25H9.86539L10.3086 15.8883C9.80223 15.0261 9.91906 13.899 10.659 13.159C11.162 12.656 11.844 12.4409 12.5 12.5138V12.25C12.5 11.0074 13.5074 10 14.75 10Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11 10C12.1046 10 13 9.10457 13 8C13 6.89543 12.1046 6 11 6C9.89543 6 9 6.89543 9 8C9 9.10457 9.89543 10 11 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.1 10H6.4C5.90294 10 5.5 10.4029 5.5 10.9V12.6C5.5 13.0971 5.90294 13.5 6.4 13.5H8.1C8.59706 13.5 9 13.0971 9 12.6V10.9C9 10.4029 8.59706 10 8.1 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.902 7.648C8.026 7.431 8.025 7.162 7.899 6.947L6.569 4.667C6.318 4.237 5.61 4.239 5.361 4.667L4.031 6.946C3.905 7.162 3.903 7.43 4.028 7.648C4.152 7.865 4.385 8 4.635 8H7.294C7.544 8 7.778 7.865 7.902 7.648Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M17.25 14.75L14.75 17.25L12.25 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 17V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 9.25V6.66409C14.75 6.39899 14.645 6.14509 14.457 5.95709L10.543 2.043C10.356 1.855 10.101 1.75 9.836 1.75H4.25C3.145 1.75 2.25 2.645 2.25 3.75V14.25C2.25 15.355 3.145 16.25 4.25 16.25H9.66521"
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

export default DesignFileDownload;
