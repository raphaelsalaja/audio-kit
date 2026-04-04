import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand2Shield({
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
          d="M9.38606 1.25C8.63278 1.25 8.02213 1.86066 8.02213 2.61394V3.03214C7.7951 2.71039 7.42046 2.5 6.99999 2.5C6.31399 2.5 5.74999 3.06 5.74999 3.75V11.215L3.98199 8.963C3.55599 8.42 2.76699 8.328 2.22699 8.752C1.68699 9.176 1.62299 9.883 2.01599 10.507L3.97599 13.521C5.02783 15.1391 6.78929 16.147 8.70364 16.2434C8.89072 16.2528 9.0458 16.1537 9.14062 15.9922C9.04154 15.6735 9 15.321 9 14.94V12C9 11.1177 9.51571 10.3168 10.3189 9.95168L13.0689 8.70168C13.6605 8.43278 14.3395 8.43278 14.9311 8.70168L15.4396 8.93283C15.6314 8.82987 15.751 8.62984 15.751 8.41219V5.25C15.751 4.56 15.187 4 14.501 4C14.0882 4 13.7195 4.20282 13.4914 4.51473V3.87068C13.4914 3.11368 12.8777 2.5 12.1207 2.5C11.3637 2.5 10.75 3.11367 10.75 3.87068V2.61394C10.75 1.86066 10.1393 1.25 9.38606 1.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14 10.75L11.25 12V14.94C11.25 16.48 14 17.25 14 17.25V10.75Z"
          fill={fill}
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
          d="M15.751 8.2508V5.25C15.751 4.56 15.187 4 14.501 4C13.815 4 13.251 4.56 13.251 5.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.24999 7.75V3.75C8.24999 3.06 7.68599 2.5 6.99999 2.5C6.31399 2.5 5.74999 3.06 5.74999 3.75V11.215L3.98199 8.963C3.55599 8.42 2.76699 8.328 2.22699 8.752C1.68699 9.176 1.62299 9.883 2.01599 10.507L3.97599 13.521C4.97959 15.0641 6.62849 16.0523 8.44039 16.2242"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10.75L16.75 12V14.94C16.75 16.48 14 17.25 14 17.25C14 17.25 11.25 16.48 11.25 14.94V12L14 10.75Z"
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

export default Hand2Shield;
