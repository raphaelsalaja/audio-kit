import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortArrows({
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
          d="M8.62699 2.41601L5.49499 5.91601C5.20699 6.23801 5.43499 6.74901 5.86799 6.74901H12.131C12.563 6.74901 12.792 6.23801 12.504 5.91601L9.37199 2.41601C9.17299 2.19401 8.82599 2.19401 8.62699 2.41601Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.62699 2.41601L5.49499 5.91601C5.20699 6.23801 5.43499 6.74901 5.86799 6.74901H12.131C12.563 6.74901 12.792 6.23801 12.504 5.91601L9.37199 2.41601C9.17299 2.19401 8.82599 2.19401 8.62699 2.41601Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.62699 15.584L5.49499 12.084C5.20699 11.762 5.43499 11.251 5.86799 11.251H12.131C12.563 11.251 12.792 11.762 12.504 12.084L9.37199 15.584C9.17299 15.806 8.82599 15.806 8.62699 15.584Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.62699 15.584L5.49499 12.084C5.20699 11.762 5.43499 11.251 5.86799 11.251H12.131C12.563 11.251 12.792 11.762 12.504 12.084L9.37199 15.584C9.17299 15.806 8.82599 15.806 8.62699 15.584Z"
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

export default SortArrows;
