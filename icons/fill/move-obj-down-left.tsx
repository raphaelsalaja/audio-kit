import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjDownLeft({
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
          d="M7.22,9.72l-3.72,3.72v-2.7c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v4.51c0,.414,.336,.75,.75,.75H7.26c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-2.7l3.72-3.72c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
        <rect
          height="7"
          width="7"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="9"
          y="2"
        />
      </g>
    </svg>
  );
}

export default MoveObjDownLeft;
