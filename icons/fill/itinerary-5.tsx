import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary5({
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
        <rect
          height="5.5"
          width="5.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="11"
          y="11"
        />
        <circle cx="4.25" cy="4.25" fill={fill} r="2.75" />
        <path
          d="M9.25,13h-3c-.689,0-1.25-.561-1.25-1.25v-3c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3c0,1.517,1.233,2.75,2.75,2.75h3c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Itinerary5;
