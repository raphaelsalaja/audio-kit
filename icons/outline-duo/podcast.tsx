import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Podcast({
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
          d="M9 10.25C9.9665 10.25 10.75 9.4665 10.75 8.5C10.75 7.5335 9.9665 6.75 9 6.75C8.0335 6.75 7.25 7.5335 7.25 8.5C7.25 9.4665 8.0335 10.25 9 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.17599 12.75H9.82399C10.718 12.75 11.414 13.527 11.315 14.416L11.099 16.361C11.043 16.867 10.615 17.251 10.105 17.251H7.89499C7.38499 17.251 6.95699 16.868 6.90099 16.361L6.68499 14.416C6.58599 13.527 7.28199 12.75 8.17599 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 10.25C9.9665 10.25 10.75 9.4665 10.75 8.5C10.75 7.5335 9.9665 6.75 9 6.75C8.0335 6.75 7.25 7.5335 7.25 8.5C7.25 9.4665 8.0335 10.25 9 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.789 11.365C13.392 10.569 13.75 9.576 13.75 8.5C13.75 5.877 11.623 3.75 9 3.75C6.377 3.75 4.25 5.877 4.25 8.5C4.25 9.576 4.608 10.569 5.211 11.365"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 14.421C2.318 12.999 1.25 10.874 1.25 8.5C1.25 4.22 4.72 0.75 9 0.75C13.28 0.75 16.75 4.22 16.75 8.5C16.75 10.875 15.682 13 14 14.421"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.17599 12.75H9.82399C10.718 12.75 11.414 13.527 11.315 14.416L11.099 16.361C11.043 16.867 10.615 17.251 10.105 17.251H7.89499C7.38499 17.251 6.95699 16.868 6.90099 16.361L6.68499 14.416C6.58599 13.527 7.28199 12.75 8.17599 12.75Z"
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

export default Podcast;
