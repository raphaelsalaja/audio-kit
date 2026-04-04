import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartBroken({
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
          d="M8.52901 15.222C8.82601 15.377 9.17301 15.377 9.47001 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.52901 15.222Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.47L7 7L11 9L9 11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.52901 15.222C8.82601 15.377 9.17301 15.377 9.47001 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.52901 15.222Z"
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

export default HeartBroken;
