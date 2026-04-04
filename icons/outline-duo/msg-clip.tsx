import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgClip({
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
          d="M1.75 9C1.75 4.996 4.996 1.75 9 1.75C13.004 1.75 16.25 4.996 16.25 9C16.25 9.18249 15.9158 9.70793 15.7446 9.56466C15.1369 9.05614 14.3541 8.75 13.5 8.75C11.5674 8.75 10 10.3174 10 12.25V14.75C10 15.1811 10.0574 15.5988 10.165 15.9958C10.2459 16.2943 9.14571 16.25 9 16.25C8.543 16.25 8.095 16.207 7.662 16.125C6.647 15.933 5.872 15.559 5.383 15.277C4.647 15.753 3 16.318 1.75 16.25C2.67 15.329 3.153 13.423 2.723 12.617C2.108 11.552 1.75 10.319 1.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.25 9C16.25 4.9961 13.004 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 10.3188 2.10801 11.552 2.72301 12.6169C3.15301 13.4228 2.67 15.3291 1.75 16.25C3 16.3179 4.647 15.7529 5.383 15.2769C5.872 15.5591 6.64699 15.9331 7.66199 16.125C8.09499 16.207 8.543 16.25 9 16.25C9.1546 16.25 9.30291 16.2271 9.45441 16.2158"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 14.25V12.25C14.75 11.56 14.19 11 13.5 11C12.81 11 12.25 11.56 12.25 12.25V14.75C12.25 16.131 13.369 17.25 14.75 17.25C16.131 17.25 17.25 16.131 17.25 14.75V12.75"
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

export default MsgClip;
