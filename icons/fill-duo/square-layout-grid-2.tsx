import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLayoutGrid2({
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
          d="M9.00012 16H13.2501C14.7667 16 16.0001 14.7666 16.0001 13.25V9H9.00012V16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.2501 2H9.00012V9H16.0001V4.75C16.0001 3.2334 14.7667 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M4.75012 2C3.23352 2 2.00012 3.2334 2.00012 4.75V13.25C2.00012 14.7666 3.23352 16 4.75012 16H9.00012V2H4.75012Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareLayoutGrid2;
