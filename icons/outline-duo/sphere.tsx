import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sphere({
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
          d="M16.2499 9.04661C16.2248 13.0292 12.9885 16.25 9 16.25C5.01148 16.25 1.77522 13.0292 1.75015 9.04661C1.77522 10.6795 5.01148 12 9 12C12.9885 12 16.2248 10.6795 16.2499 9.04661ZM16.25 9.0195C16.2395 7.38151 12.9976 6.055 9 6.055C5.00244 6.055 1.76055 7.38151 1.75003 9.0195C1.75001 9.013 1.75 9.0065 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75C13.0041 1.75 16.25 4.99594 16.25 9C16.25 9.0065 16.25 9.013 16.25 9.0195Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.228 7.185C2.301 7.689 1.75 8.318 1.75 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.60901 6.055C6.95101 6.108 6.32501 6.198 5.74301 6.319"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.772 7.185C15.699 7.689 16.25 8.318 16.25 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.391 6.055C11.049 6.108 11.675 6.198 12.257 6.319"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9C16.25 10.657 13.004 12 9 12C4.996 12 1.75 10.657 1.75 9"
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

export default Sphere;
