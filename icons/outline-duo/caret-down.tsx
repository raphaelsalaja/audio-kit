import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretDown({
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
          d="M9.845 14.209L14.87 6.286C15.292 5.62 14.814 4.75 14.025 4.75H3.975C3.187 4.75 2.708 5.62 3.13 6.286L8.155 14.209C8.548 14.828 9.451 14.828 9.844 14.209H9.845Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.845 14.209L14.87 6.286C15.292 5.62 14.814 4.75 14.025 4.75H3.975C3.187 4.75 2.708 5.62 3.13 6.286L8.155 14.209C8.548 14.828 9.451 14.828 9.844 14.209H9.845Z"
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

export default CaretDown;
