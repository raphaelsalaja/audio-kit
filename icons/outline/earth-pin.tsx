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
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73551 3.7861 9.97371 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.83802 6.603 9.62661 6.6251 9.44121 6.5487L8.51411 6.1666C7.78921 5.8678 6.96161 5.9623 6.32271 6.4169C5.75691 6.8194 5.40531 7.4578 5.36751 8.1511L5.29651 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 16.75C14 16.75 11.25 15.241 11.25 13C11.25 11.481 12.481 10.25 14 10.25C15.519 10.25 16.75 11.481 16.75 13C16.75 15.241 14 16.75 14 16.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 13.75C14.414 13.75 14.75 13.4142 14.75 13C14.75 12.5858 14.414 12.25 14 12.25C13.586 12.25 13.25 12.5858 13.25 13C13.25 13.4142 13.586 13.75 14 13.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2.59167 5.7457C3.02027 6.8697 3.97027 8.6883 5.49657 9.6832C5.92247 9.9178 6.90028 10.6811 6.83228 11.8894C6.73908 13.5437 7.74496 13.6636 8.54376 14.258C8.95386 14.5631 9.05837 15.5009 8.99837 16.241"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75421 9.8474C6.67731 9.6528 7.77601 9.3214 9.02621 10.0263"
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
