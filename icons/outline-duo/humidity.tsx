import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Humidity({
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
          d="M2 9.75C3.521 9.75 4 8.25 5.5 8.25C7 8.25 7.521 9.75 9 9.75C10.542 9.75 11.042 8.25 12.5 8.25C13.958 8.25 14.521 9.75 16 9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 5.75C3.521 5.75 4 4.25 5.5 4.25C7 4.25 7.521 5.75 9 5.75C10.542 5.75 11.042 4.25 12.5 4.25C13.958 4.25 14.521 5.75 16 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 13.75C3.521 13.75 4 12.25 5.5 12.25C7 12.25 7.521 13.75 9 13.75C10.542 13.75 11.042 12.25 12.5 12.25C13.958 12.25 14.521 13.75 16 13.75"
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

export default Humidity;
