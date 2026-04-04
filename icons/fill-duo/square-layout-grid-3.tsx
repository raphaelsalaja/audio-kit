import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLayoutGrid3({
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
          d="M9 7H16.0001V4.75C16.0001 3.233 14.7671 2 13.2501 2H9V7Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M9 11H2.00012V13.25C2.00012 14.767 3.23311 16 4.75011 16H9V11Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M9 11L9.00012 2H4.75023C3.23323 2 2.00024 3.233 2.00024 4.75L2.00012 11H9Z"
          fill={fill}
        />
        <path
          d="M9 7V16H13.2501C14.7671 16 16.0001 14.767 16.0001 13.25V7H9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SquareLayoutGrid3;
