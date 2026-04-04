import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareGrid({
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
          d="m13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75v8.5c0,1.517,1.233,2.75,2.75,2.75h8.5c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-5.25,10.75c0,.414-.336.75-.75.75h-2c-.414,0-.75-.336-.75-.75v-2c0-.414.336-.75.75-.75h2c.414,0,.75.336.75.75v2Zm0-5.5c0,.414-.336.75-.75.75h-2c-.414,0-.75-.336-.75-.75v-2c0-.414.336-.75.75-.75h2c.414,0,.75.336.75.75v2Zm5.5,5.5c0,.414-.336.75-.75.75h-2c-.414,0-.75-.336-.75-.75v-2c0-.414.336-.75.75-.75h2c.414,0,.75.336.75.75v2Zm0-5.5c0,.414-.336.75-.75.75h-2c-.414,0-.75-.336-.75-.75v-2c0-.414.336-.75.75-.75h2c.414,0,.75.336.75.75v2Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareGrid;
