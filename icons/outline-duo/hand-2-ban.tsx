import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand2Ban({
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
          d="M8.02213 2.61394C8.02213 1.86066 8.63278 1.25 9.38606 1.25C10.1393 1.25 10.75 1.86066 10.75 2.61394V3.87068C10.75 3.11367 11.3637 2.5 12.1207 2.5C12.8777 2.5 13.4914 3.11368 13.4914 3.87068V4.51473C13.7195 4.20282 14.0882 4 14.501 4C15.187 4 15.751 4.56 15.751 5.25V8.24001C15.751 8.42889 15.7266 8.77304 15.5454 8.72006C15.0551 8.57682 14.5365 8.5 14 8.5C10.9624 8.5 8.5 10.9624 8.5 14C8.5 14.6677 8.61898 15.3076 8.83689 15.8997C8.9226 16.1325 8.54058 16.2416 8.29455 16.2093C8.26139 16.2049 8.22735 16.2004 8.19295 16.1957C6.47922 15.9614 4.93355 14.9941 3.97599 13.521L2.01599 10.507C1.62299 9.883 1.68699 9.176 2.22699 8.752C2.76699 8.328 3.55599 8.42 3.98199 8.963L5.74999 11.215V3.75C5.74999 3.06 6.31399 2.5 6.99999 2.5C7.42046 2.5 7.7951 2.71039 8.02213 3.03214V2.61394Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.75 7.75V2.5C10.75 1.81 10.186 1.25 9.5 1.25C8.814 1.25 8.25 1.81 8.25 2.5V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 7.75V3.75C13.25 3.06 12.686 2.5 12 2.5C11.314 2.5 10.75 3.06 10.75 3.75V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 17.25C15.7949 17.25 17.25 15.7949 17.25 14C17.25 12.2051 15.7949 10.75 14 10.75C12.2051 10.75 10.75 12.2051 10.75 14C10.75 15.7949 12.2051 17.25 14 17.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.702 16.298L16.292 11.708"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.751 8.0001V5.25C15.751 4.56 15.187 4 14.501 4C13.815 4 13.251 4.56 13.251 5.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.24999 7.75V3.75C8.24999 3.06 7.68599 2.5 6.99999 2.5C6.31399 2.5 5.74999 3.06 5.74999 3.75V11.215L3.98199 8.963C3.55599 8.42 2.76699 8.328 2.22699 8.752C1.68699 9.176 1.62299 9.883 2.01599 10.507L3.97599 13.521C4.92359 14.978 6.44829 15.9318 8.14119 16.1765"
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

export default Hand2Ban;
