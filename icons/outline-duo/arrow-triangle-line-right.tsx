import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineRight({
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
          d="M10.25 9H2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.547 8.58599L11.031 5.52799C10.699 5.30299 10.251 5.54099 10.251 5.94199V12.057C10.251 12.458 10.699 12.696 11.031 12.471L15.547 9.41299C15.84 9.21499 15.84 8.78299 15.547 8.58499V8.58599Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.547 8.58599L11.031 5.52799C10.699 5.30299 10.251 5.54099 10.251 5.94199V12.057C10.251 12.458 10.699 12.696 11.031 12.471L15.547 9.41299C15.84 9.21499 15.84 8.78299 15.547 8.58499V8.58599Z"
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

export default ArrowTriangleLineRight;
