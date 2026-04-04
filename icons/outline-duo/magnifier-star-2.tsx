import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierStar2({
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
          d="M7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.75C13.25 4.7125 10.7875 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 15.75L11.6386 11.6386"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.75C13.25 4.7125 10.7875 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.6114 6.81971C10.5652 6.67681 10.4422 6.57281 10.293 6.55171L8.7809 6.33211L8.10311 4.96081C7.97171 4.69181 7.52831 4.69181 7.39701 4.96081L6.7192 6.33211L5.20711 6.55171C5.05791 6.57381 4.93491 6.67781 4.88871 6.81971C4.84251 6.96161 4.8803 7.11921 4.9885 7.22321L6.0835 8.29081L5.8261 9.79771C5.8009 9.94591 5.8608 10.0951 5.9816 10.1834C6.1024 10.2717 6.26431 10.2832 6.39771 10.2139L7.75011 9.50251L9.1025 10.2139C9.1603 10.2444 9.22331 10.2591 9.28641 10.2591C9.36841 10.2591 9.4493 10.2339 9.5186 10.1834C9.6395 10.0951 9.70041 9.94591 9.67411 9.79771L9.41671 8.29081L10.5117 7.22321C10.6199 7.11811 10.6577 6.96151 10.6114 6.81971Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MagnifierStar2;
