import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthPosition({
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
          d="M5.29651 9.45319L5.36751 8.15109C5.40531 7.45779 5.75691 6.81939 6.32271 6.41689C6.96161 5.96229 7.78911 5.8678 8.51411 6.1666L9.44121 6.54869C9.58801 6.60919 9.75101 6.60789 9.89471 6.54869"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59167 5.7457C3.02027 6.8697 3.97027 8.6883 5.49657 9.6832C5.92247 9.9178 6.90028 10.6811 6.83228 11.8894C6.73908 13.5437 7.49167 13.4869 8.29047 14.0814C8.70057 14.3865 8.80507 15.3243 8.74507 16.0644"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75421 9.8474C6.90811 9.6041 8.33631 9.1472 9.99171 10.7675C12.1745 12.904 12.6914 7.98751 15.8171 11.2571"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 4.75C14.355 4.75 15.25 3.8546 15.25 2.75C15.25 1.6454 14.355 0.75 13.25 0.75C12.145 0.75 11.25 1.6454 11.25 2.75C11.25 3.8546 12.145 4.75 13.25 4.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.34779 1.78299C4.64989 2.11329 1.75 5.21609 1.75 8.99999C1.75 13.0042 4.996 16.25 9 16.25C13.004 16.25 16.25 13.0042 16.25 8.99999C16.25 8.63789 16.2148 8.28489 16.1635 7.93699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 4.75V7.25"
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

export default EarthPosition;
