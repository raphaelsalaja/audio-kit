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
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FileCloud;
