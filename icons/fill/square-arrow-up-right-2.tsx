import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowUpRight2({
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
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M13.25,2H4.75c-1.519,0-2.75,1.231-2.75,2.75v6.568c0,1.336,1.616,2.006,2.561,1.061l4.879-4.879h-2.689c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h4.5c.414,0,.75,.336,.75,.75v4.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.689l-4.879,4.879c-.945,.945-.276,2.561,1.061,2.561h6.568c1.519,0,2.75-1.231,2.75-2.75V4.75c0-1.519-1.231-2.75-2.75-2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowUpRight2;
