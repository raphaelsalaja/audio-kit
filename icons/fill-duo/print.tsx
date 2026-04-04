import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Print({
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
          d="M5 9.75C5 9.33579 5.33579 9 5.75 9H12.25C12.6642 9 13 9.33579 13 9.75V15.25C13 16.2162 12.2162 17 11.25 17H6.75C5.78379 17 5 16.2162 5 15.25V9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.25 4.5C2.73079 4.5 1.5 5.73079 1.5 7.25V11.25C1.5 12.7692 2.73079 14 4.25 14H5V9.75C5 9.33579 5.33579 9 5.75 9H12.25C12.6642 9 13 9.33579 13 9.75V14H13.75C15.2692 14 16.5 12.7692 16.5 11.25V7.25C16.5 5.73079 15.2692 4.5 13.75 4.5H4.25Z"
          fill={fill}
        />
        <path
          d="M6.75 1C5.78379 1 5 1.78379 5 2.75V4.5H13V2.75C13 1.78379 12.2162 1 11.25 1H6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Print;
