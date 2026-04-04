import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Skull({
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
          d="M15.75 8.49999C15.75 4.32999 11.968 1.04299 7.647 1.88099C4.98 2.39899 2.846 4.56899 2.364 7.24199C2.141 8.47799 2.271 9.65999 2.646 10.728C2.397 11.09 2.25 11.527 2.25 12C2.25 13.243 3.257 14.25 4.5 14.25C4.764 14.25 5.014 14.196 5.25 14.112V15.25C5.25 15.802 5.698 16.25 6.25 16.25H11.75C12.302 16.25 12.75 15.802 12.75 15.25V14.112C12.986 14.196 13.236 14.25 13.5 14.25C14.743 14.25 15.75 13.243 15.75 12C15.75 11.53 15.605 11.095 15.359 10.734C15.605 10.034 15.75 9.28499 15.75 8.49999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75 14.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 14.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 11C6.32843 11 7 10.3284 7 9.5C7 8.67157 6.32843 8 5.5 8C4.67157 8 4 8.67157 4 9.5C4 10.3284 4.67157 11 5.5 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.5 11C13.3284 11 14 10.3284 14 9.5C14 8.67157 13.3284 8 12.5 8C11.6716 8 11 8.67157 11 9.5C11 10.3284 11.6716 11 12.5 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8 11.75L9 10.75L10 11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 8.49999C15.75 4.32999 11.968 1.04299 7.647 1.88099C4.98 2.39899 2.846 4.56899 2.364 7.24199C2.141 8.47799 2.271 9.65999 2.646 10.728C2.397 11.09 2.25 11.527 2.25 12C2.25 13.243 3.257 14.25 4.5 14.25C4.764 14.25 5.014 14.196 5.25 14.112V15.25C5.25 15.802 5.698 16.25 6.25 16.25H11.75C12.302 16.25 12.75 15.802 12.75 15.25V14.112C12.986 14.196 13.236 14.25 13.5 14.25C14.743 14.25 15.75 13.243 15.75 12C15.75 11.53 15.605 11.095 15.359 10.734C15.605 10.034 15.75 9.28499 15.75 8.49999Z"
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

export default Skull;
