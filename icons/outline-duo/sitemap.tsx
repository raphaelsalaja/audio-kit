import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sitemap({
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
          d="M3.25 15.75C4.2165 15.75 5 14.9665 5 14C5 13.0335 4.2165 12.25 3.25 12.25C2.2835 12.25 1.5 13.0335 1.5 14C1.5 14.9665 2.2835 15.75 3.25 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 15.75C15.7165 15.75 16.5 14.9665 16.5 14C16.5 13.0335 15.7165 12.25 14.75 12.25C13.7835 12.25 13 13.0335 13 14C13 14.9665 13.7835 15.75 14.75 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 15.75C9.9665 15.75 10.75 14.9665 10.75 14C10.75 13.0335 9.9665 12.25 9 12.25C8.0335 12.25 7.25 13.0335 7.25 14C7.25 14.9665 8.0335 15.75 9 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 12.25V10.75C14.75 9.645 13.855 8.75 12.75 8.75H5.25C4.145 8.75 3.25 9.645 3.25 10.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.25V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 15.75C4.2165 15.75 5 14.9665 5 14C5 13.0335 4.2165 12.25 3.25 12.25C2.2835 12.25 1.5 13.0335 1.5 14C1.5 14.9665 2.2835 15.75 3.25 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 15.75C15.7165 15.75 16.5 14.9665 16.5 14C16.5 13.0335 15.7165 12.25 14.75 12.25C13.7835 12.25 13 13.0335 13 14C13 14.9665 13.7835 15.75 14.75 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.75C9.9665 15.75 10.75 14.9665 10.75 14C10.75 13.0335 9.9665 12.25 9 12.25C8.0335 12.25 7.25 13.0335 7.25 14C7.25 14.9665 8.0335 15.75 9 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.25C9.9665 5.25 10.75 4.4665 10.75 3.5C10.75 2.5335 9.9665 1.75 9 1.75C8.0335 1.75 7.25 2.5335 7.25 3.5C7.25 4.4665 8.0335 5.25 9 5.25Z"
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

export default Sitemap;
