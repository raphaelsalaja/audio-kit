import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUpFromLine({
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
          d="M14.75 14.5H3.25C2.836 14.5 2.5 14.836 2.5 15.25C2.5 15.664 2.836 16 3.25 16H14.75C15.164 16 15.5 15.664 15.5 15.25C15.5 14.836 15.164 14.5 14.75 14.5Z"
          fill={fill}
        />
        <path
          d="M4.31798 13H13.682C14.32 13 14.908 12.653 15.215 12.094C15.522 11.535 15.502 10.852 15.16 10.313L10.479 2.92999C10.156 2.42099 9.60299 2.11798 8.99999 2.11798C8.39699 2.11798 7.84498 2.42199 7.52098 2.92999L2.83998 10.313C2.49798 10.852 2.47799 11.535 2.78499 12.094C3.09199 12.653 3.68098 13 4.31798 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretUpFromLine;
