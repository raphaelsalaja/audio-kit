import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand2({
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
          d="M8.02213 2.61394C8.02213 1.86066 8.63278 1.25 9.38606 1.25C10.1393 1.25 10.75 1.86066 10.75 2.61394V3.87068C10.75 3.11367 11.3637 2.5 12.1207 2.5C12.8777 2.5 13.4914 3.11368 13.4914 3.87068V4.51473C13.7195 4.20282 14.0882 4 14.501 4C15.187 4 15.751 4.56 15.751 5.25V11.251C15.751 14.012 13.512 16.251 10.751 16.251H9.00599C6.97599 16.251 5.08299 15.224 3.97599 13.521L2.01599 10.507C1.62299 9.883 1.68699 9.176 2.22699 8.752C2.76699 8.328 3.55599 8.42 3.98199 8.963L5.74999 11.215V3.75C5.74999 3.06 6.31399 2.5 6.99999 2.5C7.42046 2.5 7.7951 2.71039 8.02213 3.03214V2.61394Z"
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
          d="M8.24999 7.75V3.75C8.24999 3.06 7.68599 2.5 6.99999 2.5C6.31399 2.5 5.74999 3.06 5.74999 3.75V11.215L3.98199 8.963C3.55599 8.42 2.76699 8.328 2.22699 8.752C1.68699 9.176 1.62299 9.883 2.01599 10.507L3.97599 13.521C5.08299 15.224 6.97599 16.251 9.00599 16.251H10.751C13.512 16.251 15.751 14.012 15.751 11.251V5.25C15.751 4.56 15.187 4 14.501 4C13.815 4 13.251 4.56 13.251 5.25V7.75"
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

export default Hand2;
