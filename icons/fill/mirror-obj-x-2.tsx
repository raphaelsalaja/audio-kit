import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObjX2({
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
          d="m6,12c-.414,0-.75-.336-.75-.75V.75c0-.414.336-.75.75-.75s.75.336.75.75v10.5c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m3.5,11.5h-.25c-1.517,0-2.75-1.233-2.75-2.75V3.25C.5,1.733,1.733.5,3.25.5h.25c.414,0,.75.336.75.75s-.336.75-.75.75h-.25c-.689,0-1.25.561-1.25,1.25v5.5c0,.689.561,1.25,1.25,1.25h.25c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.75,11.5h-.25c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h.25c.689,0,1.25-.561,1.25-1.25V3.25c0-.689-.561-1.25-1.25-1.25h-.25c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h.25c1.517,0,2.75,1.233,2.75,2.75v5.5c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MirrorObjX2;
