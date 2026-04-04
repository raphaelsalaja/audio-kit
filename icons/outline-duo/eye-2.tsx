import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Eye2({
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
          d="M9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9C1.75 9 3.521 3.5 9 3.5C14.479 3.5 16.25 9 16.25 9"
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

export default Eye2;
