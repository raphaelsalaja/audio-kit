import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldUp({
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
          d="M14.391 8.44801L9.39803 1.86701C9.19803 1.60301 8.80103 1.60301 8.60103 1.86701L3.60903 8.44801C3.35903 8.77701 3.59403 9.25001 4.00703 9.25001H6.75003V15.25C6.75003 15.802 7.19803 16.25 7.75003 16.25H10.25C10.802 16.25 11.25 15.802 11.25 15.25V9.25001H13.993C14.406 9.25001 14.641 8.77701 14.391 8.44801Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.391 8.44801L9.39803 1.86701C9.19803 1.60301 8.80103 1.60301 8.60103 1.86701L3.60903 8.44801C3.35903 8.77701 3.59403 9.25001 4.00703 9.25001H6.75003V15.25C6.75003 15.802 7.19803 16.25 7.75003 16.25H10.25C10.802 16.25 11.25 15.802 11.25 15.25V9.25001H13.993C14.406 9.25001 14.641 8.77701 14.391 8.44801Z"
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

export default ArrowBoldUp;
