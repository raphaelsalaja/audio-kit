import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Laptop4({
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
          d="m8.75,10.5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75.75-.336.75-.75V3.25c0-.414-.336-.75-.75-.75H3.25c-.414,0-.75.336-.75.75v5c0,.414.336.75.75.75s.75.336.75.75-.336.75-.75.75c-1.241,0-2.25-1.009-2.25-2.25V3.25c0-1.241,1.009-2.25,2.25-2.25h5.5c1.241,0,2.25,1.009,2.25,2.25v5c0,1.241-1.009,2.25-2.25,2.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.25,10.5H.75c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h10.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Laptop4;
