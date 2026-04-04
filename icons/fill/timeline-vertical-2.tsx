import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TimelineVertical2({
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
          d="M14.25 2H8.75C7.7835 2 7 2.7835 7 3.75V6.25C7 7.2165 7.7835 8 8.75 8H14.25C15.2165 8 16 7.2165 16 6.25V3.75C16 2.7835 15.2165 2 14.25 2Z"
          fill={fill}
        />
        <path
          d="M4.5 6.62793V1.75C4.5 1.3359 4.1641 1 3.75 1C3.3359 1 3 1.3359 3 1.75V6.62793C1.9894 6.94873 1.25 7.8847 1.25 9C1.25 10.1153 1.9894 11.0513 3 11.3721V16.25C3 16.6641 3.3359 17 3.75 17C4.1641 17 4.5 16.6641 4.5 16.25V11.3721C5.5106 11.0513 6.25 10.1153 6.25 9C6.25 7.8847 5.5106 6.94873 4.5 6.62793ZM3.75 10C3.1987 10 2.75 9.5513 2.75 9C2.75 8.4487 3.1987 8 3.75 8C4.3013 8 4.75 8.4487 4.75 9C4.75 9.5513 4.3013 10 3.75 10Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25 10H8.75C7.7835 10 7 10.7835 7 11.75V14.25C7 15.2165 7.7835 16 8.75 16H14.25C15.2165 16 16 15.2165 16 14.25V11.75C16 10.7835 15.2165 10 14.25 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TimelineVertical2;
