import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookOpen2({
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
          d="M9 4.74999L14.984 3.09899C15.621 2.92299 16.25 3.40199 16.25 4.06299V12.489C16.25 12.939 15.95 13.333 15.516 13.453L9 15.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.74999L14.984 3.09899C15.621 2.92299 16.25 3.40199 16.25 4.06299V12.489C16.25 12.939 15.95 13.333 15.516 13.453L9 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.25L2.484 13.453C2.05 13.333 1.75 12.939 1.75 12.489V4.06299C1.75 3.40199 2.379 2.92299 3.016 3.09899L9 4.74999V15.25Z"
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

export default BookOpen2;
