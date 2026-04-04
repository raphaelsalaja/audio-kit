import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallotRect2({
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
        <path
          d="m11.25,4h-5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m11.25,9.5h-5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <rect
          height="4"
          width="4"
          fill={fill}
          rx="1"
          ry="1"
          strokeWidth="0"
          y="1"
        />
        <rect
          height="4"
          width="4"
          fill={fill}
          rx="1"
          ry="1"
          strokeWidth="0"
          y="7"
        />
      </g>
    </svg>
  );
}

export default BallotRect2;
