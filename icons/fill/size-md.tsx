import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SizeMd({
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
          d="M6.25,14.5H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2.75,13h1.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-1.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M6.25,8.25H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M2.75,6.5h1.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-1.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M6.25,2H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <rect
          height="8"
          width="7"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="9"
          y="8"
        />
      </g>
    </svg>
  );
}

export default SizeMd;
