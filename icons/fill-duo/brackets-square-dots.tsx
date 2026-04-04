import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BracketsSquareDots({
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
          d="M3.75 3.5C3.61221 3.5 3.5 3.61221 3.5 3.75V14.25C3.5 14.3878 3.61221 14.5 3.75 14.5H6C6.41421 14.5 6.75 14.8358 6.75 15.25C6.75 15.6642 6.41421 16 6 16H3.75C2.78379 16 2 15.2162 2 14.25V3.75C2 2.78379 2.78379 2 3.75 2H6C6.41421 2 6.75 2.33579 6.75 2.75C6.75 3.16421 6.41421 3.5 6 3.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.25 2.75C11.25 2.33579 11.5858 2 12 2H14.25C15.2162 2 16 2.78379 16 3.75V14.25C16 15.2162 15.2162 16 14.25 16H12C11.5858 16 11.25 15.6642 11.25 15.25C11.25 14.8358 11.5858 14.5 12 14.5H14.25C14.3878 14.5 14.5 14.3878 14.5 14.25V3.75C14.5 3.61221 14.3878 3.5 14.25 3.5H12C11.5858 3.5 11.25 3.16421 11.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 13C9.414 13 9.75 12.664 9.75 12.25C9.75 11.836 9.414 11.5 9 11.5C8.586 11.5 8.25 11.836 8.25 12.25C8.25 12.664 8.586 13 9 13Z"
          fill={fill}
        />
        <path
          d="M11.75 13C12.164 13 12.5 12.664 12.5 12.25C12.5 11.836 12.164 11.5 11.75 11.5C11.336 11.5 11 11.836 11 12.25C11 12.664 11.336 13 11.75 13Z"
          fill={fill}
        />
        <path
          d="M6.25 13C6.664 13 7 12.664 7 12.25C7 11.836 6.664 11.5 6.25 11.5C5.836 11.5 5.5 11.836 5.5 12.25C5.5 12.664 5.836 13 6.25 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BracketsSquareDots;
