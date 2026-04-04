import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUpToLine({
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
          d="M14.75 2H3.25C2.836 2 2.5 2.336 2.5 2.75C2.5 3.164 2.836 3.5 3.25 3.5H14.75C15.164 3.5 15.5 3.164 15.5 2.75C15.5 2.336 15.164 2 14.75 2Z"
          fill={fill}
        />
        <path
          d="M10.478 5.92999C10.155 5.42099 9.603 5.11798 9 5.11798C8.397 5.11798 7.845 5.42199 7.522 5.92999L2.84 13.313C2.499 13.852 2.478 14.535 2.785 15.094C3.092 15.653 3.68 16 4.318 16H13.682C14.32 16 14.908 15.653 15.215 15.094C15.522 14.535 15.502 13.852 15.16 13.313L10.478 5.92999Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretUpToLine;
