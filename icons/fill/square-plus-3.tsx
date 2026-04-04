import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePlus3({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m8.75.5H3.25C1.733.5.5,1.733.5,3.25v5.5c0,1.517,1.233,2.75,2.75,2.75h5.5c1.517,0,2.75-1.233,2.75-2.75V3.25c0-1.517-1.233-2.75-2.75-2.75Zm-.5,6.25h-1.5v1.5c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-1.5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h1.5v-1.5c0-.414.336-.75.75-.75s.75.336.75.75v1.5h1.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquarePlus3;
