import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout({
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
          height="4.5"
          width="6"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="2"
          y="2"
        />
        <rect
          height="7.5"
          width="6"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="2"
          y="8.5"
        />
        <rect
          height="4.5"
          width="6"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="10"
          y="11.5"
        />
        <rect
          height="7.5"
          width="6"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="10"
          y="2"
        />
      </g>
    </svg>
  );
}

export default GridLayout;
