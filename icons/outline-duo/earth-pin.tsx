import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthPin({
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
          d="M14 16.75C14 16.75 11.25 15.241 11.25 13C11.25 11.481 12.481 10.25 14 10.25C15.519 10.25 16.75 11.481 16.75 13C16.75 15.241 14 16.75 14 16.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.85468 2.04793C4.5588 2.61682 3.05362 4.72304 2.58801 5.70505C2.85045 6.71247 3.86294 8.96093 5.81342 9.89552C4.94992 8.70187 5.18698 7.2491 6.27056 6.41618C7.71182 5.30831 9.14574 7.13997 9.80071 6.61935C10.0648 6.37554 9.77531 4.79077 9.97849 3.85109C10.1563 3.37702 11.0248 2.54063 13.0769 2.9876C12.1372 2.17491 9.72452 1.33681 6.85468 2.04793Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 16.75C14 16.75 11.25 15.241 11.25 13C11.25 11.481 12.481 10.25 14 10.25C15.519 10.25 16.75 11.481 16.75 13C16.75 15.241 14 16.75 14 16.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 13.75C14.4142 13.75 14.75 13.4142 14.75 13C14.75 12.5858 14.4142 12.25 14 12.25C13.5858 12.25 13.25 12.5858 13.25 13C13.25 13.4142 13.5858 13.75 14 13.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73549 3.7861 9.97369 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.838 6.603 9.62659 6.6251 9.44119 6.5487L8.5141 6.1666C7.7892 5.8678 6.96159 5.9623 6.32269 6.4169C5.75689 6.8194 5.40529 7.4578 5.36749 8.1511L5.29649 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59171 5.7457C3.02031 6.8697 3.9703 8.6883 5.4966 9.6832C5.9225 9.9178 6.90031 10.6811 6.83231 11.8894C6.73911 13.5437 7.74499 13.6636 8.54379 14.258C8.95389 14.5631 9.05839 15.5009 8.99839 16.241"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.7542 9.8474C6.6773 9.6528 7.776 9.3214 9.0262 10.0263"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C4.9959 16.25 1.75 13.0041 1.75 9C1.75 4.9959 4.9959 1.75 9 1.75C12.5268 1.75 15.4653 4.2682 16.1158 7.6046"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EarthPin;
