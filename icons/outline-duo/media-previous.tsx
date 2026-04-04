import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaPrevious({
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
          d="M13.95 14.323L5.69698 9.753C5.10198 9.423 5.10198 8.576 5.69698 8.247L13.95 3.677C14.532 3.355 15.25 3.771 15.25 4.43V13.57C15.25 14.23 14.532 14.645 13.95 14.323Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.95 14.323L5.69698 9.753C5.10198 9.423 5.10198 8.576 5.69698 8.247L13.95 3.677C14.532 3.355 15.25 3.771 15.25 4.43V13.57C15.25 14.23 14.532 14.645 13.95 14.323Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 2.75V15.25"
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

export default MediaPrevious;
