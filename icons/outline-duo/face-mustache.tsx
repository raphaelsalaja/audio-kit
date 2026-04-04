import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceMustache({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
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
          d="M10.475 10.614C10.001 10.433 9.34 10.482 9 11.068C8.66 10.482 7.999 10.433 7.525 10.614C6.581 10.974 5.895 12.117 4.912 11.988C4.709 11.961 4.547 12.158 4.64 12.34C5.16 13.363 6.191 13.602 6.768 13.602C7.43 13.602 8.399 13.177 8.999 12.225C9.599 13.178 10.568 13.602 11.23 13.602C11.807 13.602 12.838 13.363 13.358 12.34C13.451 12.158 13.288 11.961 13.086 11.988C12.104 12.118 11.417 10.974 10.473 10.614H10.475Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceMustache;
