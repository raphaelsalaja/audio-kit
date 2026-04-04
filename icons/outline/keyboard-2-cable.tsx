import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard2Cable({
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
          d="M9,4.75v-.75c0-.966,.784-1.75,1.75-1.75h1.75c.793,0,1.462-.527,1.677-1.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
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
          y="4.75"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="6.875"
          y="9"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="4.125"
          y="9"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="9.625"
          y="9"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="12.375"
          y="9"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="5.5"
          y="7"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="8.25"
          y="7"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".5"
          ry=".5"
          stroke="none"
          x="11"
          y="7"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.25"
          x2="6.75"
          y1="12.25"
          y2="12.25"
        />
      </g>
    </svg>
  );
}

export default Keyboard2Cable;
