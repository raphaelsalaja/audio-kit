import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Brush({
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
          d="M3 9.5C3 11.017 4.233 12.25 5.75 12.25H7.354L7.125 15.375C7.125 16.409 7.966 17.25 9 17.25C10.034 17.25 10.875 16.409 10.874 15.349L10.658 12.25H12.25C13.767 12.25 15 11.017 15 9.5H3Z"
          fill={fill}
        />
        <path
          d="M15 1.75V8H3V3.75C3 2.231 4.231 1 5.75 1H9C9.552 1 10 1.448 10 2V5.25C10 5.66421 10.3358 6 10.75 6C11.1642 6 11.5 5.66421 11.5 5.25V2C11.5 1.448 11.948 1 12.5 1H14.25C14.664 1 15 1.336 15 1.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Brush;
