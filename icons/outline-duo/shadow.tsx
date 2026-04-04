import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shadow({
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
          d="M9 13.75C12.1756 13.75 14.75 11.1756 14.75 8C14.75 4.82436 12.1756 2.25 9 2.25C5.82436 2.25 3.25 4.82436 3.25 8C3.25 11.1756 5.82436 13.75 9 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.54 12.585C3.859 12.943 2.75 13.555 2.75 14.25C2.75 15.354 5.548 16.25 9 16.25C12.452 16.25 15.25 15.354 15.25 14.25C15.25 13.555 14.141 12.943 12.46 12.585"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.75C12.1756 13.75 14.75 11.1756 14.75 8C14.75 4.82436 12.1756 2.25 9 2.25C5.82436 2.25 3.25 4.82436 3.25 8C3.25 11.1756 5.82436 13.75 9 13.75Z"
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

export default Shadow;
