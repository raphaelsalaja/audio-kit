import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLayoutGrid({
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
          d="M9 9V2H4.75012C3.23312 2 2.00012 3.233 2.00012 4.75V9H9Z"
          fill={fill}
        />
        <path
          d="M9 9H16.0001V4.75C16.0001 3.233 14.7671 2 13.2501 2H9V9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 9V16H13.2501C14.7671 16 16.0001 14.767 16.0001 13.25V9H9Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M9 9L2.00012 9V13.25C2.00012 14.767 3.23312 16 4.75012 16H9V9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SquareLayoutGrid;
