import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Size({
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
          d="M15.25,12.5c-.414,0-.75,.336-.75,.75,0,.689-.561,1.25-1.25,1.25-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c1.517,0,2.75-1.233,2.75-2.75,0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M10.75,14.5h-1.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,8.5c-.414,0-.75,.336-.75,.75v1.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.5c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h2c.414,0,.75-.336,.75-.75V7.5h7.75c.414,0,.75-.336,.75-.75v-2c0-1.517-1.233-2.75-2.75-2.75ZM4.75,14.5c-.689,0-1.25-.561-1.25-1.25V7.5h2.5v1.5h-.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.75v1.5h-.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.75v1h-1.25ZM14.5,6h-1v-.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v.75h-1.5v-.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v.75h-1.5V3.5h5.75c.689,0,1.25,.561,1.25,1.25v1.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Size;
