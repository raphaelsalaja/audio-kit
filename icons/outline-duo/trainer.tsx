import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Trainer({
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
          d="M9 5.25C10.243 5.25 11.25 4.243 11.25 3C11.25 1.757 10.243 0.75 9 0.75C7.757 0.75 6.75 1.757 6.75 3C6.75 4.243 7.757 5.25 9 5.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.25C10.243 5.25 11.25 4.243 11.25 3C11.25 1.757 10.243 0.75 9 0.75C7.757 0.75 6.75 1.757 6.75 3C6.75 4.243 7.757 5.25 9 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 14.5L14.9302 12.32C15.2629 11.9874 15.3187 11.4679 15.0643 11.0722L13.7053 8.958C13.4143 8.5053 12.9548 8.17531 12.4261 8.07501C10.142 7.64191 7.85787 7.64191 5.57377 8.07501C5.04507 8.17521 4.58546 8.5053 4.29456 8.958L2.93555 11.0722C2.68115 11.4679 2.73706 11.9874 3.06966 12.32L5.24985 14.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 16.75L12 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 16.75L6 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 10.75H12"
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

export default Trainer;
