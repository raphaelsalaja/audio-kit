import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sitemap3({
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
          d="M11.25,8h-1.5v-1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.5c-1.517,0-2.75,1.233-2.75,2.75v1c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1c0-.689,.561-1.25,1.25-1.25h4.5c.689,0,1.25,.561,1.25,1.25v1c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={secondaryfill}
        />
        <circle cx="4.75" cy="14" fill={fill} r="3" />
        <circle cx="9" cy="4" fill={fill} r="3" />
        <circle cx="13.25" cy="14" fill={fill} r="3" />
      </g>
    </svg>
  );
}

export default Sitemap3;
