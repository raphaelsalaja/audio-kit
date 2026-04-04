import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flame({
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
          d="M14.5 10.733C14.5 13.78 12.038 16.25 9 16.25C10.519 16.25 11.75 15.015 11.75 13.491C11.75 11.395 9 9 9 9C9 9 6.25 11.396 6.25 13.491C6.25 15.015 7.481 16.25 9 16.25C5.962 16.25 3.5 13.78 3.5 10.733C3.5 6.542 9 1.75 9 1.75C9 1.75 14.5 6.542 14.5 10.733Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 16.25C10.519 16.25 11.75 15.015 11.75 13.491C11.75 11.395 9 9 9 9C9 9 6.25 11.396 6.25 13.491C6.25 15.015 7.481 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C12.038 16.25 14.5 13.78 14.5 10.733C14.5 6.542 9 1.75 9 1.75C9 1.75 3.5 6.542 3.5 10.733C3.5 13.78 5.962 16.25 9 16.25Z"
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

export default Flame;
