import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stars2({
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
          d="m9,5.739l1.545,3.131,3.455.502-2.5,2.437.59,3.441-3.09-1.625-3.09,1.625.59-3.441-2.5-2.437,3.455-.502,1.545-3.131Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,5.739l1.545,3.131,3.455.502-2.5,2.437.59,3.441-3.09-1.625-3.09,1.625.59-3.441-2.5-2.437,3.455-.502,1.545-3.131Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="11.2726 3.7808 12.323 3.628 13.25 1.75 14.177 3.628 16.25 3.93 14.75 5.392 14.9444 6.5253"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="6.7275 3.7808 5.677 3.628 4.75 1.75 3.823 3.628 1.75 3.93 3.25 5.392 3.0556 6.5253"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Stars2;
