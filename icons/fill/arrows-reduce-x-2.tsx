import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsReduceX2({
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
          d="m2.53,2.72c-.293-.293-.768-.293-1.061,0s-.293.768,0,1.061l1.47,1.47H.75c-.414,0-.75.336-.75.75s.336.75.75.75h2.189l-1.47,1.47c-.293.293-.293.768,0,1.061.146.146.338.22.53.22s.384-.073.53-.22l2.75-2.75c.293-.293.293-.768,0-1.061l-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.25,5.25h-2.189l1.47-1.47c.293-.293.293-.768,0-1.061s-.768-.293-1.061,0l-2.75,2.75c-.293.293-.293.768,0,1.061l2.75,2.75c.146.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768,0-1.061l-1.47-1.47h2.189c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowsReduceX2;
