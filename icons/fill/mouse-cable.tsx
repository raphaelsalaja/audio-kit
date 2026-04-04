import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MouseCable({
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
          d="M9.75,4.5h-1.5c-2.343,0-4.25,1.907-4.25,4.25v5c0,2.343,1.907,4.25,4.25,4.25h1.5c2.343,0,4.25-1.907,4.25-4.25v-5c0-2.343-1.907-4.25-4.25-4.25Zm0,6.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.5Z"
          fill={fill}
        />
        <path
          d="M9,6c-.414,0-.75-.336-.75-.75v-.75c0-1.378,1.122-2.5,2.5-2.5h1.75c.551,0,1-.449,1-1,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,1.378-1.122,2.5-2.5,2.5h-1.75c-.551,0-1,.449-1,1v.75c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MouseCable;
