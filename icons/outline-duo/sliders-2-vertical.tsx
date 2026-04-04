import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sliders2Vertical({
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
          d="M9 12.75C9.9665 12.75 10.75 11.9665 10.75 11C10.75 10.0335 9.9665 9.25 9 9.25C8.0335 9.25 7.25 10.0335 7.25 11C7.25 11.9665 8.0335 12.75 9 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 8.5C15.2165 8.5 16 7.7165 16 6.75C16 5.7835 15.2165 5 14.25 5C13.2835 5 12.5 5.7835 12.5 6.75C12.5 7.7165 13.2835 8.5 14.25 8.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 8.5C4.7165 8.5 5.5 7.7165 5.5 6.75C5.5 5.7835 4.7165 5 3.75 5C2.7835 5 2 5.7835 2 6.75C2 7.7165 2.7835 8.5 3.75 8.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 12.75C9.9665 12.75 10.75 11.9665 10.75 11C10.75 10.0335 9.9665 9.25 9 9.25C8.0335 9.25 7.25 10.0335 7.25 11C7.25 11.9665 8.0335 12.75 9 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.75V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 8.5C15.2165 8.5 16 7.7165 16 6.75C16 5.7835 15.2165 5 14.25 5C13.2835 5 12.5 5.7835 12.5 6.75C12.5 7.7165 13.2835 8.5 14.25 8.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 5V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 16.25V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 8.5C4.7165 8.5 5.5 7.7165 5.5 6.75C5.5 5.7835 4.7165 5 3.75 5C2.7835 5 2 5.7835 2 6.75C2 7.7165 2.7835 8.5 3.75 8.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 5V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 16.25V11.25"
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

export default Sliders2Vertical;
