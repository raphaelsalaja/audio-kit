import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder4({
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
          d="M2.91799 7.75H15.082C15.696 7.75 16.165 8.298 16.07 8.904L15.132 14.904C15.056 15.391 14.637 15.75 14.144 15.75H3.85599C3.36299 15.75 2.94399 15.391 2.86799 14.904L1.92999 8.904C1.83499 8.298 2.30399 7.75 2.91799 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 5.25C15.25 4.698 14.802 4.25 14.25 4.25H8.25L7.294 2.72C7.111 2.428 6.791 2.25 6.446 2.25H3.75C3.198 2.25 2.75 2.698 2.75 3.25V5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.91799 7.75H15.082C15.696 7.75 16.165 8.298 16.07 8.904L15.132 14.904C15.056 15.391 14.637 15.75 14.144 15.75H3.85599C3.36299 15.75 2.94399 15.391 2.86799 14.904L1.92999 8.904C1.83499 8.298 2.30399 7.75 2.91799 7.75Z"
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

export default Folder4;
