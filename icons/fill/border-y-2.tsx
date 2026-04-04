import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BorderY2({
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
          d="m10.75,2H1.25c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h9.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.75,11.5H1.25c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h9.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="6" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="6" cy="3.25" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="6" cy="8.75" fill={secondaryfill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default BorderY2;
