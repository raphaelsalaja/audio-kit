import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridEmptyObjBottomLeft({
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
          height="6.5"
          width="6.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="10"
          y="1.5"
        />
        <rect
          height="6.5"
          width="6.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="10"
          y="10"
        />
        <rect
          height="6.5"
          width="6.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="1.5"
          y="1.5"
        />
        <path
          d="M7.25,12.75c.414,0,.75-.336,.75-.75v-.25c0-.965-.785-1.75-1.75-1.75h-.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.25c.138,0,.25,.112,.25,.25v.25c0,.414,.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M6,16.5h.25c.965,0,1.75-.785,1.75-1.75v-.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v.25c0,.138-.112,.25-.25,.25h-.25c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M3.25,16.5h.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-.25c-.138,0-.25-.112-.25-.25v-.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v.25c0,.965,.785,1.75,1.75,1.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25,12.75c.414,0,.75-.336,.75-.75v-.25c0-.138,.112-.25,.25-.25h.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-.25c-.965,0-1.75,.785-1.75,1.75v.25c0,.414,.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default GridEmptyObjBottomLeft;
