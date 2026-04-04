import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretRightToLine({
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
          d="M11.668 8.155L4.286 3.474C3.62 3.052 2.75 3.53 2.75 4.319V13.682C2.75 14.47 3.62 14.949 4.286 14.527L11.669 9.845C12.288 9.452 12.288 8.549 11.669 8.156L11.668 8.155Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.668 8.155L4.286 3.474C3.62 3.052 2.75 3.53 2.75 4.319V13.682C2.75 14.47 3.62 14.949 4.286 14.527L11.669 9.845C12.288 9.452 12.288 8.549 11.669 8.156L11.668 8.155Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 3.25V14.75"
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

export default CaretRightToLine;
