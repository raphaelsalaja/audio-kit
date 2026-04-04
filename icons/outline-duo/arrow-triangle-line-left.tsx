import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineLeft({
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
          d="M7.75 9H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.45303 9.41399L6.96903 12.472C7.30103 12.697 7.74903 12.459 7.74903 12.058V5.94199C7.74903 5.54099 7.30103 5.30299 6.96903 5.52799L2.45303 8.58599C2.16003 8.78399 2.16003 9.21599 2.45303 9.41399Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.45303 9.41399L6.96903 12.472C7.30103 12.697 7.74903 12.459 7.74903 12.058V5.94199C7.74903 5.54099 7.30103 5.30299 6.96903 5.52799L2.45303 8.58599C2.16003 8.78399 2.16003 9.21599 2.45303 9.41399Z"
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

export default ArrowTriangleLineLeft;
