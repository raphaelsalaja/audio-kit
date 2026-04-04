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
          d="M3.75 8C3.3359 8 3 7.6641 3 7.25V1.75C3 1.3359 3.3359 1 3.75 1C4.1641 1 4.5 1.3359 4.5 1.75V7.25C4.5 7.6641 4.1641 8 3.75 8Z"
          fill={fill}
        />
        <path
          d="M3.75 17C3.3359 17 3 16.6641 3 16.25V10.75C3 10.3359 3.3359 10 3.75 10C4.1641 10 4.5 10.3359 4.5 10.75V16.25C4.5 16.6641 4.1641 17 3.75 17Z"
          fill={fill}
        />
        <path
          d="M3.75 11.25C4.99264 11.25 6 10.2426 6 9C6 7.75736 4.99264 6.75 3.75 6.75C2.50736 6.75 1.5 7.75736 1.5 9C1.5 10.2426 2.50736 11.25 3.75 11.25Z"
          fill={fill}
        />
        <path
          d="M14.25 2H8.75C7.7835 2 7 2.7835 7 3.75V6.25C7 7.2165 7.7835 8 8.75 8H14.25C15.2165 8 16 7.2165 16 6.25V3.75C16 2.7835 15.2165 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 10H8.75C7.7835 10 7 10.7835 7 11.75V14.25C7 15.2165 7.7835 16 8.75 16H14.25C15.2165 16 16 15.2165 16 14.25V11.75C16 10.7835 15.2165 10 14.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TimelineVertical2;
