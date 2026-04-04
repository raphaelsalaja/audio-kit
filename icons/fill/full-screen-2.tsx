import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FullScreen2({
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
          height="8"
          width="8"
          fill={secondaryfill}
          rx=".75"
          ry=".75"
          x="5"
          y="5"
        />
        <path
          d="M2.75,7.5c.414,0,.75-.336,.75-.75v-2c0-.689,.561-1.25,1.25-1.25h2c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-2c-1.517,0-2.75,1.233-2.75,2.75v2c0,.414,.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M13.25,2h-2c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2c.689,0,1.25,.561,1.25,1.25v2c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
        <path
          d="M15.25,10.5c-.414,0-.75,.336-.75,.75v2c0,.689-.561,1.25-1.25,1.25h-2c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2c1.517,0,2.75-1.233,2.75-2.75v-2c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M6.75,14.5h-2c-.689,0-1.25-.561-1.25-1.25v-2c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2c0,1.517,1.233,2.75,2.75,2.75h2c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FullScreen2;
