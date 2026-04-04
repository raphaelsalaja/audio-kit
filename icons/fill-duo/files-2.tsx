import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Files2({
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
          d="M3.25 1C2.28379 1 1.5 1.78379 1.5 2.75V9.75C1.5 10.7162 2.28379 11.5 3.25 11.5H6.5V8.25C6.5 6.45536 7.95536 5 9.75 5H10V3.75C10 3.55109 9.92098 3.36032 9.78033 3.21967L7.78033 1.21967C7.63968 1.07902 7.44891 1 7.25 1H3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10 4H7.75C7.33579 4 7 3.66421 7 3.25V1L7.25 1C7.44891 1 7.63968 1.07902 7.78033 1.21967L9.78033 3.21967C9.92098 3.36032 10 3.55109 10 3.75V4Z"
          fill={fill}
        />
        <path
          d="M8 8.25C8 7.28379 8.78379 6.5 9.75 6.5H13.75C13.9489 6.5 14.1397 6.57902 14.2803 6.71967L16.2803 8.71967C16.421 8.86032 16.5 9.05109 16.5 9.25V15.25C16.5 16.2162 15.7162 17 14.75 17H9.75C8.78379 17 8 16.2162 8 15.25V8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.5 9.5H14.25C13.8358 9.5 13.5 9.16421 13.5 8.75V6.5H13.75C13.9489 6.5 14.1397 6.57902 14.2803 6.71967L16.2803 8.71967C16.421 8.86032 16.5 9.05109 16.5 9.25V9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Files2;
