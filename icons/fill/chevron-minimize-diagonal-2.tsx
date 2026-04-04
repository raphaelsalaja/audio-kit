import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronMinimizeDiagonal2({
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
          d="M14.75,9.5h-4.5c-.414,0-.75,.336-.75,.75v4.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-3.75h3.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M7.75,2.5c-.414,0-.75,.336-.75,.75v3.75H3.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H7.75c.414,0,.75-.336,.75-.75V3.25c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChevronMinimizeDiagonal2;
