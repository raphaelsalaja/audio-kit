import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CopiesPlus2({
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
          d="M5.75,2.5h6.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H5.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M4.25,5.5H13.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H4.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,7H3.75c-.965,0-1.75,.785-1.75,1.75v5.5c0,.965,.785,1.75,1.75,1.75h4.631c-.24-.358-.381-.788-.381-1.25,0-1.241,1.01-2.25,2.25-2.25h.25v-.25c0-1.241,1.01-2.25,2.25-2.25s2.25,1.009,2.25,2.25v.25h.25c.264,0,.514,.054,.75,.138v-3.888c0-.965-.785-1.75-1.75-1.75Z"
          fill={fill}
        />
        <path
          d="M15.25,14h-1.75v-1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CopiesPlus2;
