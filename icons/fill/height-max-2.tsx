import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeightMax2({
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
          d="m7.75,1.5h3c.414,0,.75-.336.75-.75s-.336-.75-.75-.75h-3c-.414,0-.75.336-.75.75s.336.75.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m10.75,10.5h-3c-.414,0-.75.336-.75.75s.336.75.75.75h3c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m8.04,5.521l.46-.46v3.689c0,.414.336.75.75.75s.75-.336.75-.75v-3.669l.438.439c.292.293.767.294,1.061,0,.293-.293.293-.768,0-1.061l-1.729-1.73c-.141-.141-.331-.22-.53-.22s-.39.079-.53.22l-1.73,1.73c-.293.293-.293.768,0,1.061.146.146.338.22.53.22s.384-.073.53-.22Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m4.25,0H1.75C.785,0,0,.785,0,1.75v.75h2.25c.414,0,.75.336.75.75s-.336.75-.75.75H0v1.25h1.25c.414,0,.75.336.75.75s-.336.75-.75.75H0v1.25h2.25c.414,0,.75.336.75.75s-.336.75-.75.75H0v.75c0,.965.785,1.75,1.75,1.75h2.5c.965,0,1.75-.785,1.75-1.75V1.75c0-.965-.785-1.75-1.75-1.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default HeightMax2;
