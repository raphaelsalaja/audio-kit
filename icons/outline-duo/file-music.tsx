import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileMusic({
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
          d="M13.25 17.25C14.0784 17.25 14.75 16.5784 14.75 15.75C14.75 14.9216 14.0784 14.25 13.25 14.25C12.4216 14.25 11.75 14.9216 11.75 15.75C11.75 16.5784 12.4216 17.25 13.25 17.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 1.83956C10.6212 1.78103 10.4801 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.645 2.75 3.75V14.25C2.75 15.355 3.645 16.25 4.75 16.25H9.53304C9.51125 16.0864 9.5 15.9195 9.5 15.75C9.5 13.9358 10.7883 12.4225 12.5 12.075V10.75C12.5 9.83613 13.0528 9.01303 13.8987 8.66727C14.2948 8.50538 14.7183 8.46319 15.1224 8.53104C15.2367 8.55024 15.25 8.35204 15.25 8.2361V6.664C15.25 6.51978 15.2189 6.37883 15.1603 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.83956Z"
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
          d="M13.25 17.25C14.0784 17.25 14.75 16.5784 14.75 15.75C14.75 14.9216 14.0784 14.25 13.25 14.25C12.4216 14.25 11.75 14.9216 11.75 15.75C11.75 16.5784 12.4216 17.25 13.25 17.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 15.75V10.75C15.067 11.073 15.48 11.442 16 11.797C16.45 12.104 16.879 12.332 17.25 12.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.7974V6.6641C15.25 6.399 15.145 6.1441 14.957 5.9571L11.043 2.043C10.855 1.855 10.601 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H8.80051"
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

export default FileMusic;
