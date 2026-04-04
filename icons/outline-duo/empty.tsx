import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Empty({
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
          d="M15.25 8.99999C15.25 12.4518 12.4518 15.25 8.99998 15.25C7.9948 15.25 7.3913 15.2257 6.71246 14.4695L14.4317 6.75023C15.4139 7.04546 15.25 8.09087 15.25 8.99999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.4194 4.58058C12.2884 3.44955 10.7259 2.75 9 2.75C5.54822 2.75 2.75 5.54822 2.75 9C2.75 10.7259 3.44955 12.2884 4.58058 13.4194L13.4194 4.58058Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4.581 13.419C3.45 12.288 2.75 10.725 2.75 9C2.75 5.548 5.548 2.75 9 2.75C10.726 2.75 12.288 3.45 13.419 4.581"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25537 14.9868C7.81087 15.1487 8.39267 15.25 8.99997 15.25C12.452 15.25 15.25 12.4519 15.25 9C15.25 8.3926 15.1486 7.811 14.9868 7.2554"
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

export default Empty;
