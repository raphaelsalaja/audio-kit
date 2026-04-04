import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockMinus({
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
          d="M9 1C4.58179 1 1 4.58179 1 9C1 13.4182 4.58179 17 9 17C10.4062 17 11.7277 16.6372 12.876 16H11.25C10.0074 16 9 14.9926 9 13.75C9 12.5074 10.0074 11.5 11.25 11.5H16.25C16.3666 11.5 16.4812 11.5089 16.593 11.526C16.857 10.732 17 9.88267 17 9C17 4.58179 13.4182 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.5 13.75C10.5 13.3358 10.8358 13 11.25 13H16.25C16.6642 13 17 13.3358 17 13.75C17 14.1642 16.6642 14.5 16.25 14.5H11.25C10.8358 14.5 10.5 14.1642 10.5 13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.00001 4C9.41422 4 9.75001 4.33579 9.75001 4.75V9C9.75001 9.24611 9.62926 9.47656 9.42691 9.61664L6.17691 11.8666C5.83635 12.1024 5.36914 12.0175 5.13336 11.6769C4.89759 11.3363 4.98254 10.8691 5.3231 10.6334L8.25001 8.60704V4.75C8.25001 4.33579 8.58579 4 9.00001 4Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClockMinus;
