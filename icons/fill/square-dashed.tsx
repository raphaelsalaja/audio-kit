import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDashed({
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
          d="M2.75,5.5c-.414,0-.75-.336-.75-.75,0-1.517,1.233-2.75,2.75-2.75,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75c-.689,0-1.25,.561-1.25,1.25,0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M15.25,5.5c-.414,0-.75-.336-.75-.75,0-.689-.561-1.25-1.25-1.25-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c1.517,0,2.75,1.233,2.75,2.75,0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M13.25,16c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c.689,0,1.25-.561,1.25-1.25,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
        <path
          d="M4.75,16c-1.517,0-2.75-1.233-2.75-2.75,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,.689,.561,1.25,1.25,1.25,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M10.25,3.5h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M10.25,16h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,11c-.414,0-.75-.336-.75-.75v-2.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2.75,11c-.414,0-.75-.336-.75-.75v-2.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SquareDashed;
