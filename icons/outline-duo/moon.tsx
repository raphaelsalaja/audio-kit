import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Moon({
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
          d="M13 11.75C9.548 11.75 6.75 8.952 6.75 5.5C6.75 4.148 7.183 2.901 7.912 1.878C4.548 2.506 2 5.453 2 9C2 13.004 5.246 16.25 9.25 16.25C12.622 16.25 15.448 13.944 16.259 10.826C15.309 11.409 14.196 11.75 13 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13 11.75C9.548 11.75 6.75 8.952 6.75 5.5C6.75 4.148 7.183 2.901 7.912 1.878C4.548 2.506 2 5.453 2 9C2 13.004 5.246 16.25 9.25 16.25C12.622 16.25 15.448 13.944 16.259 10.826C15.309 11.409 14.196 11.75 13 11.75Z"
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

export default Moon;
