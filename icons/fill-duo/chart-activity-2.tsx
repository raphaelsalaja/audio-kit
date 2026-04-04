import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartActivity2({
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
          d="M5.92917 3.76041C6.2902 2.75555 7.71563 2.77418 8.05251 3.78483L11.0271 12.7104L12.3063 9.15696C12.5564 8.46454 13.2142 8 13.953 8H16.25C16.6642 8 17 8.33579 17 8.75C17 9.16421 16.6642 9.5 16.25 9.5H13.953C13.8479 9.5 13.7534 9.56612 13.7174 9.66566L12.0708 14.2396C11.7095 15.244 10.2843 15.2257 9.94749 14.2152L6.9729 5.28961L5.69367 8.84304C5.44341 9.5378 4.78494 10 4.047 10H1.75C1.33579 10 1 9.66421 1 9.25C1 8.83579 1.33579 8.5 1.75 8.5H4.047C4.15302 8.5 4.24656 8.43413 4.28233 8.33496L5.92917 3.76041Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartActivity2;
