import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretRightFromLine({
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
          d="M14.668 8.155L7.286 3.474C6.62 3.052 5.75 3.53 5.75 4.319V13.682C5.75 14.47 6.62 14.949 7.286 14.527L14.669 9.845C15.288 9.452 15.288 8.549 14.669 8.156L14.668 8.155Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.668 8.155L7.286 3.474C6.62 3.052 5.75 3.53 5.75 4.319V13.682C5.75 14.47 6.62 14.949 7.286 14.527L14.669 9.845C15.288 9.452 15.288 8.549 14.669 8.156L14.668 8.155Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 3.25V14.75"
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

export default CaretRightFromLine;
