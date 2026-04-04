import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDotsVertical({
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
          height="12.5"
          width="12.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(18) rotate(90)"
          x="2.75"
          y="2.75"
        />
        <path
          d="M10,9c0,.551-.449,1-1,1s-1-.449-1-1,.449-1,1-1,1,.449,1,1Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10,12.5c0,.551-.449,1-1,1s-1-.449-1-1,.449-1,1-1,1,.449,1,1Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10,5.5c0,.551-.449,1-1,1s-1-.449-1-1,.449-1,1-1,1,.449,1,1Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareDotsVertical;
