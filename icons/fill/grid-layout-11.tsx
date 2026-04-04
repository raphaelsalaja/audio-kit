import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout11({
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
          height="5"
          width="14"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="2"
          y="2"
        />
        <rect
          height="7.5"
          width="6.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="2"
          y="8.5"
        />
        <path
          d="m15.25,8.5h-4.5c-.414,0-.75.336-.75.75s.336.75.75.75h4.5c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.25,11.5h-4.5c-.414,0-.75.336-.75.75s.336.75.75.75h4.5c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.25,14.5h-4.5c-.414,0-.75.336-.75.75s.336.75.75.75h4.5c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default GridLayout11;
