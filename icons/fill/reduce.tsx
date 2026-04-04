import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Reduce({
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
          d="M6.75,2c-.414,0-.75,.336-.75,.75v2c0,.689-.561,1.25-1.25,1.25H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2c1.517,0,2.75-1.233,2.75-2.75V2.75c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M15.25,6h-2c-.689,0-1.25-.561-1.25-1.25V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v2c0,1.517,1.233,2.75,2.75,2.75h2c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,10.5h-2c-1.517,0-2.75,1.233-2.75,2.75v2c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2c0-.689,.561-1.25,1.25-1.25h2c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M4.75,10.5H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2c.689,0,1.25,.561,1.25,1.25v2c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Reduce;
