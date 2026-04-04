import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tabs({
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
          d="M13.75,2H6.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.75v2.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V3.5h1.75c.689,0,1.25,.561,1.25,1.25v1.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.5c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75,5.5H7.5V2.75c0-.414-.336-.75-.75-.75h-2.5c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.75c1.517,0,2.75-1.233,2.75-2.75V6.25c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tabs;
