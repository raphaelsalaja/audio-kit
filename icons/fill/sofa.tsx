import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sofa({
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
          d="M15.75,6c-.965,0-1.75,.785-1.75,1.75v2.75H4v-2.75c0-.965-.785-1.75-1.75-1.75s-1.75,.785-1.75,1.75v3.5c0,1.255,.849,2.304,2,2.633v1.367c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.25H14v1.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.367c1.151-.329,2-1.378,2-2.633v-3.5c0-.965-.785-1.75-1.75-1.75Z"
          fill={fill}
        />
        <path
          d="M8.25,9V2h-3.5c-1.439,0-2.609,1.114-2.727,2.523,.076-.005,.149-.023,.227-.023,1.792,0,3.25,1.458,3.25,3.25v1.25h2.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25,2h-3.5v7h2.75v-1.25c0-1.792,1.458-3.25,3.25-3.25,.078,0,.151,.018,.227,.023-.118-1.409-1.288-2.523-2.727-2.523Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Sofa;
