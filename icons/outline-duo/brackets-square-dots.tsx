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
          d="M6 15.25H3.75C3.198 15.25 2.75 14.802 2.75 14.25V3.75C2.75 3.198 3.198 2.75 3.75 2.75H6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 15.25H14.25C14.802 15.25 15.25 14.802 15.25 14.25V3.75C15.25 3.198 14.802 2.75 14.25 2.75H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13C9.41421 13 9.75 12.6642 9.75 12.25C9.75 11.8358 9.41421 11.5 9 11.5C8.58579 11.5 8.25 11.8358 8.25 12.25C8.25 12.6642 8.58579 13 9 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.75 13C12.1642 13 12.5 12.6642 12.5 12.25C12.5 11.8358 12.1642 11.5 11.75 11.5C11.3358 11.5 11 11.8358 11 12.25C11 12.6642 11.3358 13 11.75 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 13C6.66421 13 7 12.6642 7 12.25C7 11.8358 6.66421 11.5 6.25 11.5C5.83579 11.5 5.5 11.8358 5.5 12.25C5.5 12.6642 5.83579 13 6.25 13Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BracketsSquareDots;
