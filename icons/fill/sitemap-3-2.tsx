import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sitemap32({
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
          d="m7.75,5h-1v-1.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75v1.25h-1c-1.241,0-2.25,1.009-2.25,2.25v1c0,.414.336.75.75.75s.75-.336.75-.75v-1c0-.414.336-.75.75-.75h3.5c.414,0,.75.336.75.75v1c0,.414.336.75.75.75s.75-.336.75-.75v-1c0-1.241-1.009-2.25-2.25-2.25Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle cx="2.75" cy="10" fill={fill} r="2" strokeWidth="0" />
        <circle cx="6" cy="2" fill={fill} r="2" strokeWidth="0" />
        <circle cx="9.25" cy="10" fill={fill} r="2" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Sitemap32;
