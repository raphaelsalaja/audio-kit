import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareTable({
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
          d="M16.0002 4.75L16.0001 13.25C16.0001 14.767 14.7671 16 13.2501 16H4.75012C3.23312 16 2.00012 14.767 2.00012 13.25V4.75C2.00012 3.233 3.23312 2 4.75012 2H13.2502C14.7672 2 16.0002 3.233 16.0002 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8 2H6.5V5.5H2.00012V7H6.5V11H2.00012V12.5H6.5V16H8V12.5H16.0001L16.0001 11H8V7H16.0002L16.0002 5.5H8V2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareTable;
