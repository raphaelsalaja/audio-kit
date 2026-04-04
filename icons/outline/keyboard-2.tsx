import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard2({
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
          height="10.5"
          width="14.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="1.75"
          y="3.75"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="6.875"
          y="8"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="4.125"
          y="8"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="9.625"
          y="8"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="12.375"
          y="8"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="5.5"
          y="6"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="8.25"
          y="6"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="11"
          y="6"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.25"
          x2="6.75"
          y1="11.25"
          y2="11.25"
        />
      </g>
    </svg>
  );
}

export default Keyboard2;
