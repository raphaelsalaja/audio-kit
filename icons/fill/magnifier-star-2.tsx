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
          d="M11.1083 11.1083C11.4012 10.8154 11.876 10.8154 12.1689 11.1083L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L11.1083 12.1689C10.8154 11.876 10.8154 11.4012 11.1083 11.1083Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 1.5C4.29829 1.5 1.5 4.29829 1.5 7.75C1.5 11.2017 4.29829 14 7.75 14C11.2017 14 14 11.2017 14 7.75C14 4.29829 11.2017 1.5 7.75 1.5ZM10.293 6.55171C10.4422 6.57281 10.5652 6.67681 10.6114 6.81971C10.6577 6.96151 10.6199 7.11811 10.5117 7.22321L9.41671 8.29081L9.67411 9.79771C9.70041 9.94591 9.6395 10.0951 9.5186 10.1834C9.4493 10.2339 9.36841 10.2591 9.28641 10.2591C9.22331 10.2591 9.1603 10.2444 9.1025 10.2139L7.75011 9.50251L6.39771 10.2139C6.26431 10.2832 6.1024 10.2717 5.9816 10.1834C5.8608 10.0951 5.8009 9.94591 5.8261 9.79771L6.0835 8.29081L4.9885 7.22321C4.8803 7.11921 4.84251 6.96161 4.88871 6.81971C4.93491 6.67781 5.05791 6.57381 5.20711 6.55171L6.7192 6.33211L7.39701 4.96081C7.52831 4.69181 7.97171 4.69181 8.10311 4.96081L8.7809 6.33211L10.293 6.55171Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MagnifierStar2;
