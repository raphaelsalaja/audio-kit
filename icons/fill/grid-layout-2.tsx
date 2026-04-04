import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout2({
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
        <rect
          height="6"
          width="4.5"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="11.5"
          y="2"
        />
        <rect
          height="6"
          width="7.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="2"
          y="2"
        />
        <rect
          height="6"
          width="4.5"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="2"
          y="10"
        />
        <rect
          height="6"
          width="7.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="8.5"
          y="10"
        />
      </g>
    </svg>
  );
}

export default GridLayout2;
