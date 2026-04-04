import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BracketsSquare({
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
          d="M11.25 2.75C11.25 2.33579 11.5858 2 12 2H14.25C15.2162 2 16 2.78379 16 3.75V14.25C16 15.2162 15.2162 16 14.25 16H12C11.5858 16 11.25 15.6642 11.25 15.25C11.25 14.8358 11.5858 14.5 12 14.5H14.25C14.3878 14.5 14.5 14.3878 14.5 14.25V3.75C14.5 3.61221 14.3878 3.5 14.25 3.5H12C11.5858 3.5 11.25 3.16421 11.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.75 3.5C3.61221 3.5 3.5 3.61221 3.5 3.75V14.25C3.5 14.3878 3.61221 14.5 3.75 14.5H6C6.41421 14.5 6.75 14.8358 6.75 15.25C6.75 15.6642 6.41421 16 6 16H3.75C2.78379 16 2 15.2162 2 14.25V3.75C2 2.78379 2.78379 2 3.75 2H6C6.41421 2 6.75 2.33579 6.75 2.75C6.75 3.16421 6.41421 3.5 6 3.5H3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BracketsSquare;
