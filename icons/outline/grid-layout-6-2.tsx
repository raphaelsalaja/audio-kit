import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout62({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <rect
          height="3.5"
          width="3.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="translate(18 18) rotate(-180)"
          x="7.25"
          y="7.25"
        />
        <rect
          height="9.5"
          width="3.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="translate(6 12) rotate(-180)"
          x="1.25"
          y="1.25"
        />
        <rect
          height="3.5"
          width="3.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="translate(18 6) rotate(-180)"
          x="7.25"
          y="1.25"
        />
      </g>
    </svg>
  );
}

export default GridLayout62;
