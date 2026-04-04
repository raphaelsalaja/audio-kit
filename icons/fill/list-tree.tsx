import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListTree({
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
          d="M13.25 2H10.75C9.7835 2 9 2.7835 9 3.75V6.25C9 7.2165 9.7835 8 10.75 8H13.25C14.2165 8 15 7.2165 15 6.25V3.75C15 2.7835 14.2165 2 13.25 2Z"
          fill={fill}
        />
        <path
          d="M13.25 10H10.75C9.7835 10 9 10.7835 9 11.75V14.25C9 15.2165 9.7835 16 10.75 16H13.25C14.2165 16 15 15.2165 15 14.25V11.75C15 10.7835 14.2165 10 13.25 10Z"
          fill={fill}
        />
        <path
          d="M4.5 1.75C4.5 1.33579 4.16421 1 3.75 1C3.33579 1 3 1.33579 3 1.75V3.5V3.75V11.75C3 12.9922 4.00779 14 5.25 14H6.75C7.16421 14 7.5 13.6642 7.5 13.25C7.5 12.8358 7.16421 12.5 6.75 12.5H5.25C4.83621 12.5 4.5 12.1638 4.5 11.75V5.87187C4.73461 5.95484 4.98705 6 5.25 6H6.75C7.16421 6 7.5 5.66421 7.5 5.25C7.5 4.83579 7.16421 4.5 6.75 4.5H5.25C4.83621 4.5 4.5 4.16379 4.5 3.75V3.5V1.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ListTree;
