import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Office2({
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
          d="M4.5 8V16.25C4.5 16.6642 4.83579 17 5.25 17H3.25C2.28379 17 1.5 16.2162 1.5 15.25V9.75C1.5 8.78379 2.28379 8 3.25 8H4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.5 1.93399C8.5 0.512895 10.1031 -0.314566 11.2615 0.505971L15.261 3.33863C15.7261 3.66709 16 4.20108 16 4.767V15.25C16 16.2162 15.2162 17 14.25 17H11.7524C12.1655 16.9987 12.5 16.6634 12.5 16.25V7.25C12.5 6.28379 11.7162 5.5 10.75 5.5H8.5V1.93399Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.25 5.5C5.28379 5.5 4.5 6.28379 4.5 7.25V16.25C4.5 16.6642 4.83579 17 5.25 17H11.75C12.1642 17 12.5 16.6642 12.5 16.25V7.25C12.5 6.28379 11.7162 5.5 10.75 5.5H6.25ZM7 9.25C7 8.83579 7.33579 8.5 7.75 8.5H9.25C9.66421 8.5 10 8.83579 10 9.25C10 9.66421 9.66421 10 9.25 10H7.75C7.33579 10 7 9.66421 7 9.25ZM7.75 11C7.33579 11 7 11.3358 7 11.75C7 12.1642 7.33579 12.5 7.75 12.5H9.25C9.66421 12.5 10 12.1642 10 11.75C10 11.3358 9.66421 11 9.25 11H7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Office2;
