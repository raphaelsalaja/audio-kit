import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretLeft({
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
          d="M3.79097 9.845L11.714 14.87C12.38 15.292 13.25 14.814 13.25 14.025V3.975C13.25 3.187 12.38 2.708 11.714 3.13L3.79097 8.155C3.17197 8.548 3.17197 9.451 3.79097 9.844V9.845Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.79097 9.845L11.714 14.87C12.38 15.292 13.25 14.814 13.25 14.025V3.975C13.25 3.187 12.38 2.708 11.714 3.13L3.79097 8.155C3.17197 8.548 3.17197 9.451 3.79097 9.844V9.845Z"
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

export default CaretLeft;
