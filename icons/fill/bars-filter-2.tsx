import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BarsFilter2({
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
          d="m11.25,3.5H.75c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h10.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.25,7H2.75c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h6.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m7.25,10.5h-2.5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h2.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default BarsFilter2;
