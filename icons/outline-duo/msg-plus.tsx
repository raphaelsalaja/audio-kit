import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgPlus({
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
          d="M9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C8.095 16.207 8.543 16.25 9 16.25C9.13858 16.25 10.5256 16.2734 10.2889 15.8537C10.105 15.5277 10 15.1511 10 14.75C10 13.5074 11.0074 12.5 12.25 12.5H12.5V12.25C12.5 11.0074 13.5074 10 14.75 10C15.1518 10 15.529 10.1054 15.8555 10.2899C16.25 10.4297 16.191 10.2031 16.191 9.92963C16.2299 9.62525 16.25 9.31497 16.25 9C16.25 4.996 13.004 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.75 12.25V17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.2155 9.64111C16.2364 9.42991 16.25 9.2168 16.25 9C16.25 4.9961 13.004 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 10.3188 2.10801 11.552 2.72301 12.6169C3.15301 13.4228 2.67 15.3291 1.75 16.25C3 16.3179 4.647 15.7529 5.383 15.2769C5.872 15.5591 6.647 15.9331 7.662 16.125C8.095 16.207 8.543 16.25 9 16.25C9.2167 16.25 9.4299 16.2363 9.6412 16.2156"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14.75H12.25"
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

export default MsgPlus;
