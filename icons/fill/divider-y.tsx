import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerY({
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
          d="m4.75,6.5h8.5c1.517,0,2.75-1.233,2.75-2.75v-1c0-.414-.336-.75-.75-.75H2.75c-.414,0-.75.336-.75.75v1c0,1.517,1.233,2.75,2.75,2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.25,11.5H4.75c-1.517,0-2.75,1.233-2.75,2.75v1c0,.414.336.75.75.75h12.5c.414,0,.75-.336.75-.75v-1c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16,8.25H2c-.414,0-.75.336-.75.75s.336.75.75.75h14c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DividerY;
