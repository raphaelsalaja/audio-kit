import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectCenterX2({
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
          d="m.75,11.75c-.414,0-.75-.336-.75-.75V1C0,.586.336.25.75.25s.75.336.75.75v10c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m11.25,11.75c-.414,0-.75-.336-.75-.75V1c0-.414.336-.75.75-.75s.75.336.75.75v10c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <rect
          height="6"
          width="6"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="3"
          y="3"
        />
      </g>
    </svg>
  );
}

export default RectCenterX2;
