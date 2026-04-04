import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sliders2({
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
          d="M11 10.75C11.9665 10.75 12.75 9.9665 12.75 9C12.75 8.0335 11.9665 7.25 11 7.25C10.0335 7.25 9.25 8.0335 9.25 9C9.25 9.9665 10.0335 10.75 11 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 5.5C7.7165 5.5 8.5 4.7165 8.5 3.75C8.5 2.7835 7.7165 2 6.75 2C5.7835 2 5 2.7835 5 3.75C5 4.7165 5.7835 5.5 6.75 5.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 16C7.7165 16 8.5 15.2165 8.5 14.25C8.5 13.2835 7.7165 12.5 6.75 12.5C5.7835 12.5 5 13.2835 5 14.25C5 15.2165 5.7835 16 6.75 16Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 9H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9H9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 3.75H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 3.75H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 14.25H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 14.25H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 10.75C11.9665 10.75 12.75 9.9665 12.75 9C12.75 8.0335 11.9665 7.25 11 7.25C10.0335 7.25 9.25 8.0335 9.25 9C9.25 9.9665 10.0335 10.75 11 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 5.5C7.7165 5.5 8.5 4.7165 8.5 3.75C8.5 2.7835 7.7165 2 6.75 2C5.7835 2 5 2.7835 5 3.75C5 4.7165 5.7835 5.5 6.75 5.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 16C7.7165 16 8.5 15.2165 8.5 14.25C8.5 13.2835 7.7165 12.5 6.75 12.5C5.7835 12.5 5 13.2835 5 14.25C5 15.2165 5.7835 16 6.75 16Z"
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

export default Sliders2;
