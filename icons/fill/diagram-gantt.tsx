import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiagramGantt({
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
          d="M16.25,14.5h-2c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M11,7.25c0-.414-.336-.75-.75-.75H3.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.5c.414,0,.75-.336,.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15,11.25c0-.414-.336-.75-.75-.75H7.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.5c.414,0,.75-.336,.75-.75Z"
          fill={fill}
        />
        <path
          d="M4.5,3.25c0-.414-.336-.75-.75-.75H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H3.75c.414,0,.75-.336,.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DiagramGantt;
