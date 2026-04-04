import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowUpFromLine2({
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
          d="m10.75,11.5H1.25c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h9.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m6.53.72c-.293-.293-.768-.293-1.061,0l-3,3c-.293.293-.293.768,0,1.061s.768.293,1.061,0l1.72-1.72v4.689c0,.414.336.75.75.75s.75-.336.75-.75V3.061l1.72,1.72c.146.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768,0-1.061L6.53.72Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowUpFromLine2;
