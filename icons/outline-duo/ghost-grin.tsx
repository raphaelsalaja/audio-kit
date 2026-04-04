import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GhostGrin({
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
          d="M6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8 10H10C10.276 10 10.5 10.224 10.5 10.5C10.5 11.328 9.828 12 9 12C8.172 12 7.5 11.328 7.5 10.5C7.5 10.224 7.724 10 8 10Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default GhostGrin;
