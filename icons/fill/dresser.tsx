import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dresser({
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
          d="M4.75,17c-.414,0-.75-.336-.75-.75v-2c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M13.25,17c-.414,0-.75-.336-.75-.75v-2c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M16,7.5v-3.25c0-1.517-1.233-2.75-2.75-2.75H4.75c-1.517,0-2.75,1.233-2.75,2.75v3.25h14ZM7.25,3.5h3.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-3.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2,9v3.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75v-3.25H2Zm8.75,3.5h-3.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Dresser;
