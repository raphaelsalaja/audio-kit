import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsReduceDiagonal3({
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
          d="m11.018,3.982h-1.939l2.202-2.202c.293-.293.293-.768,0-1.061s-.768-.293-1.061,0l-2.202,2.202V.982c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.75c0,.414.336.75.75.75h3.75c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m4.732,6.518H.982c-.414,0-.75.336-.75.75s.336.75.75.75h1.939l-2.202,2.202c-.293.293-.293.768,0,1.061.146.146.338.22.53.22s.384-.073.53-.22l2.202-2.202v1.939c0,.414.336.75.75.75s.75-.336.75-.75v-3.75c0-.414-.336-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowsReduceDiagonal3;
