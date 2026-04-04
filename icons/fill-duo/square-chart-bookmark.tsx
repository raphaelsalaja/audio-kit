import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartBookmark({
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
          d="M10.5 2.5H3.75C2.23079 2.5 1 3.73079 1 5.25V13.75C1 15.2692 2.23079 16.5 3.75 16.5H12.25C13.7692 16.5 15 15.2692 15 13.75V8.18198L14.341 8.84099C13.6975 9.48449 12.7297 9.67699 11.889 9.32873C11.0482 8.98047 10.5 8.16004 10.5 7.25V2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.75 7.75C5.16421 7.75 5.5 8.08579 5.5 8.5V12.75C5.5 13.1642 5.16421 13.5 4.75 13.5C4.33579 13.5 4 13.1642 4 12.75V8.5C4 8.08579 4.33579 7.75 4.75 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.25 10C11.6642 10 12 10.3358 12 10.75V12.75C12 13.1642 11.6642 13.5 11.25 13.5C10.8358 13.5 10.5 13.1642 10.5 12.75V10.75C10.5 10.3358 10.8358 10 11.25 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 5.5C8.41421 5.5 8.75 5.83579 8.75 6.25V12.75C8.75 13.1642 8.41421 13.5 8 13.5C7.58579 13.5 7.25 13.1642 7.25 12.75V6.25C7.25 5.83579 7.58579 5.5 8 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 1.75C12 0.783786 12.7838 0 13.75 0H16.25C17.2162 0 18 0.783786 18 1.75V7.25C18 7.55335 17.8173 7.82682 17.537 7.94291C17.2568 8.059 16.9342 7.99483 16.7197 7.78033L15 6.06066L13.2803 7.78033C13.0658 7.99483 12.7432 8.059 12.463 7.94291C12.1827 7.82682 12 7.55335 12 7.25V1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareChartBookmark;
