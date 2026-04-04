import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GhostEnraged({
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
          d="M9 16.25C10.438 16.25 10.531 14.75 12 14.75C13.469 14.75 13.5 16.25 15.25 16.25V8C15.25 4.548 12.452 1.75 9 1.75C5.548 1.75 2.75 4.548 2.75 8V16.25C4.5 16.25 4.531 14.75 6 14.75C7.469 14.75 7.562 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C10.438 16.25 10.531 14.75 12 14.75C13.469 14.75 13.5 16.25 15.25 16.25V8C15.25 4.548 12.452 1.75 9 1.75C5.548 1.75 2.75 4.548 2.75 8V16.25C4.5 16.25 4.531 14.75 6 14.75C7.469 14.75 7.562 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9.508C6.519 9.952 7.461 9.827 8.087 9.264C8.328 9.047 8.257 8.646 7.976 8.484L5.524 7.068C5.243 6.906 4.86 7.044 4.793 7.362C4.618 8.186 4.981 9.064 5.75 9.508Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 9.508C11.481 9.952 10.539 9.827 9.91299 9.264C9.67199 9.047 9.74299 8.646 10.024 8.484L12.476 7.068C12.757 6.906 13.14 7.044 13.207 7.362C13.382 8.186 13.019 9.064 12.25 9.508Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default GhostEnraged;
