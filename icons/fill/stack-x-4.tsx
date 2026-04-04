import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackX4({
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
          height="10"
          width="6"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="3"
          y="1"
        />
        <path
          d="m11.25,11c-.414,0-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75s.75.336.75.75v8.5c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m.75,11c-.414,0-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75s.75.336.75.75v8.5c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default StackX4;
