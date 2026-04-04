import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaLibrary({
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
          d="M4 4.75C4 3.23079 5.23079 2 6.75 2H14.25C15.7692 2 17 3.23079 17 4.75V10.25C17 11.7692 15.7692 13 14.25 13H6.75C5.23079 13 4 11.7692 4 10.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.75 6C2.16421 6 2.5 6.33579 2.5 6.75V13.25C2.5 13.9408 3.05921 14.5 3.75 14.5H12.25C12.6642 14.5 13 14.8358 13 15.25C13 15.6642 12.6642 16 12.25 16H3.75C2.23079 16 1 14.7692 1 13.25V6.75C1 6.33579 1.33579 6 1.75 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.7977 6.84943L9.81714 5.11015C9.29671 4.80625 8.63422 5.17043 8.63422 5.76065V7.50057V9.24049C8.63422 9.83072 9.29671 10.1949 9.81714 9.891L12.7977 8.1517C13.3026 7.85659 13.3026 7.14455 12.7977 6.84943Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MediaLibrary;
