import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowUpLeft2({
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
          d="M2,4.75V13.25c0,1.519,1.231,2.75,2.75,2.75h6.568c1.336,0,2.006-1.616,1.061-2.561l-4.879-4.879v2.689c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V6.75c0-.414,.336-.75,.75-.75h4.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-2.689s4.879,4.879,4.879,4.879c.945,.945,2.561,.276,2.561-1.061V4.75c0-1.519-1.231-2.75-2.75-2.75H4.75c-1.519,0-2.75,1.231-2.75,2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowUpLeft2;
