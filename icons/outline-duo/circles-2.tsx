import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles2({
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
        <circle
          cx="9"
          cy="9"
          fill={secondaryfill}
          fillOpacity="0.3"
          r="1.25"
          stroke="none"
        />
        <path
          d="M16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75C13.0041 1.75 16.25 4.99594 16.25 9ZM13.25 9C13.25 11.3472 11.3472 13.25 9 13.25C6.65279 13.25 4.75 11.3472 4.75 9C4.75 6.65279 6.65279 4.75 9 4.75C11.3472 4.75 13.25 6.65279 13.25 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 10.25C9.69036 10.25 10.25 9.69036 10.25 9C10.25 8.30964 9.69036 7.75 9 7.75C8.30964 7.75 7.75 8.30964 7.75 9C7.75 9.69036 8.30964 10.25 9 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25C11.347 13.25 13.25 11.347 13.25 9C13.25 6.653 11.347 4.75 9 4.75C6.653 4.75 4.75 6.653 4.75 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.995 12.755C6.40921 12.755 6.745 12.4192 6.745 12.005C6.745 11.5908 6.40921 11.255 5.995 11.255C5.58078 11.255 5.245 11.5908 5.245 12.005C5.245 12.4192 5.58078 12.755 5.995 12.755Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.375 2.156C10.63 1.897 9.833 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 8.167 16.102 7.37 15.844 6.625"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.127 4.62299C14.5412 4.62299 14.877 4.2872 14.877 3.87299C14.877 3.45877 14.5412 3.12299 14.127 3.12299C13.7128 3.12299 13.377 3.45877 13.377 3.87299C13.377 4.2872 13.7128 4.62299 14.127 4.62299Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Circles2;
