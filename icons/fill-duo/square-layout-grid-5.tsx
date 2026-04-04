import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLayoutGrid5({
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
          d="M13.2501 2H4.75006C3.23128 2 2.00006 3.23122 2.00006 4.75V13.25C2.00006 14.7688 3.23128 16 4.75006 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.50012 2H8.00012V6.5H16.0001V8H8.00012V16H6.50012V8H2.00012V6.5H6.50012V2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareLayoutGrid5;
