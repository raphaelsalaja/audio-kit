import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsReduceDiagonal22({
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
          d="m4.732.232c-.414,0-.75.336-.75.75v1.939L1.78.72c-.293-.293-.768-.293-1.061,0s-.293.768,0,1.061l2.202,2.202H.982c-.414,0-.75.336-.75.75s.336.75.75.75h3.75c.414,0,.75-.336.75-.75V.982c0-.414-.336-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.018,6.518h-3.75c-.414,0-.75.336-.75.75v3.75c0,.414.336.75.75.75s.75-.336.75-.75v-1.939l2.202,2.202c.146.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768,0-1.061l-2.202-2.202h1.939c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowsReduceDiagonal22;
