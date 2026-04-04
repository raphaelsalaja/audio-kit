import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Collision({
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
          d="M6 1L9.344 5.781L14 2L12.083 7.625L16.25 8.25L12.542 10.458L15.75 16.25L10 12.25L8 16.25L7 12L2 13L6 9L1.75 5.75L6.458 6.583L6 1Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6 1L9.344 5.781L14 2L12.083 7.625L16.25 8.25L12.542 10.458L15.75 16.25L10 12.25L8 16.25L7 12L2 13L6 9L1.75 5.75L6.458 6.583L6 1Z"
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

export default Collision;
