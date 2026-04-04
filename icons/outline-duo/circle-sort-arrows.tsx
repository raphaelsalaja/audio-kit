import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleSortArrows({
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
        <circle
          cx="9"
          cy="9"
          fill={secondaryfill}
          fillOpacity="0.3"
          r="7.25"
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
          d="M8.544 5.032L6.849 7.01C6.515 7.399 6.792 8.001 7.305 8.001H10.695C11.208 8.001 11.484 7.4 11.151 7.01L9.456 5.032C9.216 4.753 8.784 4.753 8.545 5.032H8.544Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.544 12.968L6.849 10.99C6.515 10.601 6.792 9.999 7.305 9.999H10.695C11.208 9.999 11.484 10.6 11.151 10.99L9.456 12.968C9.216 13.247 8.784 13.247 8.545 12.968H8.544Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleSortArrows;
