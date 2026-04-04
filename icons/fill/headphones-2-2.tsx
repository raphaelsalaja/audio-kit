import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones22({
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
          d="m10.75,7.5c-.414,0-.75-.336-.75-.75v-.75c0-2.206-1.794-4-4-4S2,3.794,2,6v.75c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-.75C.5,2.967,2.967.5,6,.5s5.5,2.467,5.5,5.5v.75c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m3.25,6H1.25c-.414,0-.75.336-.75.75v3c0,.965.785,1.75,1.75,1.75h1c.965,0,1.75-.785,1.75-1.75v-2c0-.965-.785-1.75-1.75-1.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.75,6h-2c-.965,0-1.75.785-1.75,1.75v2c0,.965.785,1.75,1.75,1.75h1c.965,0,1.75-.785,1.75-1.75v-3c0-.414-.336-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Headphones22;
