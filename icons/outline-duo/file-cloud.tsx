import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileCloud({
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
          d="M14.5 11.75C13.2297 11.75 12.1711 12.616 11.8553 13.7864C11.7405 13.7627 11.6217 13.75 11.5 13.75C10.5335 13.75 9.75 14.5335 9.75 15.5C9.75 16.4665 10.5335 17.25 11.5 17.25H14.5C16.0188 17.25 17.25 16.0187 17.25 14.5C17.25 12.9813 16.0188 11.75 14.5 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.3359 1.75C10.48 1.75 10.6212 1.78131 10.75 1.83984V5.25C10.75 5.802 11.198 6.25 11.75 6.25H15.1602C15.2188 6.37884 15.25 6.51984 15.25 6.66406V9.29277C15.25 9.3876 15.2498 9.55472 15.1558 9.54242C14.9412 9.51435 14.7223 9.5 14.5 9.5C12.7867 9.5 11.2976 10.363 10.4033 11.6553C8.72812 12.1317 7.5 13.6698 7.5 15.5C7.5 15.7055 7.51617 15.9073 7.54633 16.1044C7.54704 16.109 7.54591 16.114 7.54328 16.1194C7.47628 16.2558 7.27646 16.25 7.12445 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.3359Z"
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
          d="M15.25 8.8006V6.664C15.25 6.399 15.145 6.144 14.957 5.957L11.043 2.043C10.855 1.855 10.601 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H6.8122"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 11.75C13.2297 11.75 12.1711 12.616 11.8553 13.7864C11.7405 13.7627 11.6217 13.75 11.5 13.75C10.5335 13.75 9.75 14.5335 9.75 15.5C9.75 16.4665 10.5335 17.25 11.5 17.25H14.5C16.0188 17.25 17.25 16.0187 17.25 14.5C17.25 12.9813 16.0188 11.75 14.5 11.75Z"
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

export default FileCloud;
