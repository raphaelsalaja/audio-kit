import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard4Mouse({
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
          d="M8.75,13H3.75c-1.517,0-2.75-1.233-2.75-2.75V5.75c0-1.517,1.233-2.75,2.75-2.75H14.25c1.517,0,2.75,1.233,2.75,2.75v1c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1c0-.689-.561-1.25-1.25-1.25H3.75c-.689,0-1.25,.561-1.25,1.25v4.5c0,.689,.561,1.25,1.25,1.25h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M9,10h-2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M14.25,8h-1c-1.517,0-2.75,1.233-2.75,2.75v3.5c0,1.517,1.233,2.75,2.75,2.75h1c1.517,0,2.75-1.233,2.75-2.75v-3.5c0-1.517-1.233-2.75-2.75-2.75Zm.25,4.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1Z"
          fill={secondaryfill}
        />
        <rect
          height="1.5"
          width="1.5"
          fill={fill}
          rx=".5"
          ry=".5"
          x="6.875"
          y="6"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={fill}
          rx=".5"
          ry=".5"
          x="4.125"
          y="6"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={fill}
          rx=".5"
          ry=".5"
          x="9.625"
          y="6"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={fill}
          rx=".5"
          ry=".5"
          x="12.375"
          y="6"
        />
      </g>
    </svg>
  );
}

export default Keyboard4Mouse;
