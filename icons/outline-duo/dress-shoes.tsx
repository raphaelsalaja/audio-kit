import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DressShoes({
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
          d="M1.75 5.75C2.173 5.98 3.391 6.571 5 6.375C6.816 6.154 7.935 5.076 8.25 4.75C8.753 5.475 9.406 6.269 10.25 7.042C12.16 8.79 14.238 9.684 15.836 10.155C16.667 10.4 17.25 11.145 17.25 12.012V12.083C17.25 12.48 16.972 12.818 16.582 12.895C15.304 13.147 13.636 13.336 11.702 13.201C9.777 13.067 8.178 12.653 7 12.251L6.5 13.251H1.75V12.251C1.341 11.46 1 10.401 1 8.668C1 7.406 1.488 6.218 1.75 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.25 7.04199L9 8.12499"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 5.75C2.173 5.98 3.391 6.571 5 6.375C6.816 6.154 7.935 5.076 8.25 4.75C8.753 5.475 9.406 6.269 10.25 7.042C12.16 8.79 14.238 9.684 15.836 10.155C16.667 10.4 17.25 11.145 17.25 12.012V12.083C17.25 12.48 16.972 12.818 16.582 12.895C15.304 13.147 13.636 13.336 11.702 13.201C9.777 13.067 8.178 12.653 7 12.251L6.5 13.251H1.75V12.251C1.341 11.46 1 10.401 1 8.668C1 7.406 1.488 6.218 1.75 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 12.25H7"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DressShoes;
