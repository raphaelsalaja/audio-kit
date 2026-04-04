import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Loader({
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
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="1.75"
          y2="4.25"
        />
        <line
          fill="none"
          opacity=".88"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.127"
          x2="12.359"
          y1="3.873"
          y2="5.641"
        />
        <line
          fill="none"
          opacity=".75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.25"
          x2="13.75"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          opacity=".63"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.127"
          x2="12.359"
          y1="14.127"
          y2="12.359"
        />
        <line
          fill="none"
          opacity=".5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="16.25"
          y2="13.75"
        />
        <line
          fill="none"
          opacity=".38"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.873"
          x2="5.641"
          y1="14.127"
          y2="12.359"
        />
        <line
          fill="none"
          opacity=".25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.75"
          x2="4.25"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          opacity=".13"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.873"
          x2="5.641"
          y1="3.873"
          y2="5.641"
        />
      </g>
    </svg>
  );
}

export default Loader;
